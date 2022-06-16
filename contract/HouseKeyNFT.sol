
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract HouseKeyNFT is ERC721Enumerable, Ownable{
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIdTracker;
  
  uint256 public constant COLLECTION_SIZE = 4;
  uint256 public constant PRICE = 0.00001 ether;
  uint256 public constant MINT_LIMIT = 1;
  
  uint256 private constant PAUSE_STATE=0;
  uint256 private constant PUBLIC_SALE_STATE=1;

  uint256 private _saleState;
  string public _currentBaseTokenURI;

  constructor() ERC721("HouseKeyNFT", "HouseKey") {
     _currentBaseTokenURI="https://gateway.pinata.cloud/ipfs/QmYCqd9BFw5u6K7MG2nx17pmc9ofRYckzxNuWpGe6CSh1U";
    setPublicSale();
  }

  function setBaseTokenURI(string memory URI) public onlyOwner {
    _currentBaseTokenURI = URI;
  }

  function setPauseSale() public onlyOwner {
    _saleState = PAUSE_STATE;
  }

  function setPublicSale() public onlyOwner {
    _saleState = PUBLIC_SALE_STATE;
  }

  function _baseURI() internal view override returns (string memory) {
    return string(abi.encodePacked(_currentBaseTokenURI,"/"));
  }

  function isSaleOpen() public view returns(bool) {
      return _saleState == PUBLIC_SALE_STATE;
  }
  

  function mint(uint256 units) public payable {

    require(isSaleOpen(), "The sale is not open");
    require(units <= MINT_LIMIT, string(abi.encodePacked("The mint limit is ", MINT_LIMIT)));
    require(_tokenIdTracker.current() + units <= COLLECTION_SIZE, "The units requested exceed the collection size");
    require(units * PRICE <= msg.value, "The transaction value is not correct");

    uint256 i;
    for (i = 1; i <= units; i++) {
       _tokenIdTracker.increment();
       _safeMint(_msgSender(), _tokenIdTracker.current());
    }

  }


  function withdraw() public onlyOwner {
    uint256 balance = address(this).balance;
    payable(msg.sender).transfer(balance);
  }


  function walletOfOwner(address walletAddress) public view returns (uint256[] memory) {
    uint256 tokenCount = balanceOf(walletAddress);
    uint256[] memory tokenIds = new uint256[](tokenCount);

    uint256 i;
    for (i = 0; i < tokenCount; i++) {
      tokenIds[i] = tokenOfOwnerByIndex(walletAddress, i);
    }

    return tokenIds;
  }

}