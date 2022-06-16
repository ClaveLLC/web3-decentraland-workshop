import * as utils from '@dcl/ecs-scene-utils'
import {isNFTHolder, mintNFT} from "../../utils/contract-calls"

const _counterEntity = new Entity("counter");
let _keyHeadModel;

export function createKey(parent:IEntity) : void {
  
  executeTask(async () => {
    try {
      if(!await isKeyHolder()){
        const key = new Entity('key')
        const keyShape = new GLTFShape("models/key/Gold_Key_Genesis.glb")
        key.addComponentOrReplace(keyShape)
        key.addComponentOrReplace(onTouchKey(key))
        key.setParent(parent)
      }
      else
      {
        handleWhenIsKeyHolder();
      }
    } catch (error) {
      log(error)
    }
  })
}

const onTouchKey = function(key:IEntity) : OnPointerDown {
  return new OnPointerDown(async function () 
  {
    addCheckKeyMintedTimmer(key)
    await mintKey()
  },
  {
    button: ActionButton.PRIMARY,
    hoverText: "OBTENER",
  })
}

const addCheckKeyMintedTimmer = function (key:IEntity) : void {
  if(!_counterEntity.alive){
    engine.addEntity(_counterEntity);
    _counterEntity.addComponentOrReplace(
      new utils.Interval(5000, () : void => {
        executeTask(async () => {
          try {
            if(await isKeyHolder()){
              handleWhenIsKeyHolder(key);
            }
          } catch (error) {
            log(error)
          }
        })
    }))
  }
}

const handleWhenIsKeyHolder = function(key:IEntity = null) : void {
  if(key){
    engine.removeEntity(_counterEntity);
    engine.removeEntity(key);
  }
  engine.addSystem(new NFTHeadPositioningSystem());
  _keyHeadModel = new Entity();
  const keyHeadShape = new GLTFShape("models/key/Gold_Key_Genesis.glb")
  keyHeadShape.withCollisions = true
  keyHeadShape.isPointerBlocker = true
  keyHeadShape.visible = true
  _keyHeadModel.addComponentOrReplace(keyHeadShape)
  engine.addEntity(_keyHeadModel);
  const keyObtainedSource = new AudioSource(new AudioClip("models/key/key_obtained.mp3"))
  _keyHeadModel.addComponent(keyObtainedSource);
  keyObtainedSource.playOnce();
} 

const mintKey = async function () : Promise<void>{
 return mintNFT();
}

const isKeyHolder = async function () : Promise<boolean>{
  return isNFTHolder();
}

class NFTHeadPositioningSystem implements ISystem {
  update() {
    if(_keyHeadModel.alive){
      locateOverUsersHead(_keyHeadModel);
    }
  }
}

const locateOverUsersHead = function(entity: IEntity) : void {

  const characterHeadPosition = Camera.instance.position.add(new Vector3(0,0.6,0))
  entity.addComponentOrReplace(new Transform({ 
    position: characterHeadPosition,
    scale: new Vector3(1,1,1),
    rotation: Quaternion.Euler(0, 0, 270)
  }))

}