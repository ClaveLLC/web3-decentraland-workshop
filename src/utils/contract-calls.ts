import { abi } from "contract/HouseKeyNFT"
import { getProvider } from "@decentraland/web3-provider"
import { getUserAccount } from "@decentraland/EthereumController"
import { RequestManager, ContractFactory } from "eth-connect"

const _houseKeyNFTContractAddress="0x121C64Bfc77176332769E45802935D854409C382"

export async function isNFTHolder()  : Promise<boolean>{
    // create an instance of the web3 provider to interface with Metamask
    const provider = await getProvider()
    // Create the object that will handle the sending and receiving of RPC messages
    const requestManager = new RequestManager(provider)
    // Create a factory object based on the abi
    const factory = new ContractFactory(requestManager, abi)
    // Use the factory object to instance a `contract` object, referencing a specific contract
    const contract = (await factory.at(_houseKeyNFTContractAddress)) as any
  
    const address = await getUserAccount()
  
    const res = await contract.balanceOf(address)
  
    return res > 0
}

export async function mintNFT()  : Promise<void>{
    // create an instance of the web3 provider to interface with Metamask
    const provider = await getProvider()
    // Create the object that will handle the sending and receiving of RPC messages
    const requestManager = new RequestManager(provider)
    // Create a factory object based on the abi
    const factory = new ContractFactory(requestManager, abi)
    // Use the factory object to instance a `contract` object, referencing a specific contract
    const contract = (await factory.at(_houseKeyNFTContractAddress)) as any
  
    const address = await getUserAccount()
  
    await contract.mint(1, { from: address, value:10000000000000  });
  }