import * as utils from '@dcl/ecs-scene-utils'
import { createChannel } from 'node_modules/decentraland-builder-scripts/channel'
import {isNFTHolder} from "../../utils/contract-calls"

let _door : IEntity;
const _multiplayerEnabled = true;
let _doorAudioSource
let _accessDeniedSource

export function createDoor(parent:IEntity) : void {
  const openPos: Quaternion = Quaternion.Euler(0, 180, 0)
  const closedPos: Quaternion = Quaternion.Euler(0, 90, 0)

  // Define wrapper entity to rotate door. This is the entity that actually rotates.
  const doorPivot = new Entity()
  doorPivot.setParent(parent)
  doorPivot.addComponent(
    new Transform({
      position: new Vector3(5.75, 0, 2.65),
      rotation: closedPos
    })
  )

  // Add actual door to scene. This entity doesn't rotate, its parent drags it with it.
  _door = new Entity()
  _door.addComponent(
    new Transform({
      position: new Vector3(-1,2,-0.18),
      scale: new Vector3(1.7, 4, 0.1),
    })
  )
  _door.addComponent(new BoxShape())
  engine.addEntity(_door)
  // Define a material to color the door red
  const doorMaterial = new Material()
  doorMaterial.albedoColor = Color3.Red()
  doorMaterial.metallic = 0.9
  doorMaterial.roughness = 0.1
  // Assign the material to the door
  _door.addComponent(doorMaterial)
  _doorAudioSource = new AudioSource(new AudioClip("models/door/door_squeak.mp3"))
  _door.addComponent(_doorAudioSource)
  _accessDeniedSource = new AudioSource(new AudioClip("models/door/access_denied.mp3"))
  doorPivot.addComponent(_accessDeniedSource);
  // Set the door as a child of doorPivot
  _door.setParent(doorPivot)
  //toggle behavior for doorPivot
  _door.addComponent(
    new utils.ToggleComponent(utils.ToggleState.Off, (value) => { 
      if (value === utils.ToggleState.On) {
        // open
        doorPivot.addComponentOrReplace(
          new utils.RotateTransformComponent(
            doorPivot.getComponent(Transform).rotation,
            openPos,
            0.5
          )
        )
      } else {
        // close
        doorPivot.addComponentOrReplace(
          new utils.RotateTransformComponent(
            doorPivot.getComponent(Transform).rotation,
            closedPos,
            0.5
          )
        )
      }
    })
  )
  _door.addComponent(onTouchDoor())
  if(_multiplayerEnabled)
    handleDoorMultiPlayerExperience()
}

let _openDoorAction : BaseAction<{}>

let _closeDoorAction : BaseAction<{}>
  
let _channel : IChannel

const handleDoorMultiPlayerExperience = function () : void {
  const channelId = Math.random().toString(16).slice(2)
  const channelBus = new MessageBus()
  const host = "door";
  _channel = createChannel(channelId, host, channelBus);

  _openDoorAction = _channel.createAction("openDoor",{})
  _closeDoorAction = _channel.createAction("closeDoor",{})

  _channel.handleAction('openDoor', () => openDoor(false))
  _channel.handleAction('closeDoor', () => closeDoor(false))
  _channel.reply<boolean>(
    'isDoorOpenSyncValues',
      () => isDoorOpen()
    )
  _channel.request<boolean>('isDoorOpenSyncValues', hasOtherPlayerTheDoorOpen => {
    setDoor(hasOtherPlayerTheDoorOpen);
  })
}

const onTouchDoor = function() : OnPointerDown {
  return new OnPointerDown(toogleDoor,
  {
    button: ActionButton.PRIMARY,
    hoverText: "OPEN/CLOSE",
  })
 }

export async function openDoorForKeyHolder(): Promise<boolean>{
  
  if(await isKeyHolder()){
    return openDoor();
  }
  else
  {
    _accessDeniedSource.playOnce()
  }

  return false;
}

const isKeyHolder = async function () : Promise<boolean>{
  return isNFTHolder();
}

export function setDoor(open:boolean) : void {
  _door.getComponent(utils.ToggleComponent).set(open ? utils.ToggleState.On : utils.ToggleState.Off)
}

export async function toogleDoor():Promise<void> {
  if(!isDoorOpen())
    await(openDoorForKeyHolder())
  else
    closeDoor()
}

export function openDoor(propagateEvent:boolean=true):boolean{
  
  if(!isDoorOpen()){
    const toggleDoorComponent = _door.getComponent(utils.ToggleComponent);
    toggleDoorComponent.toggle();
    _doorAudioSource.playOnce();  

    if(_multiplayerEnabled && propagateEvent)
    _channel.sendActions([_openDoorAction])

    return true;
  }
      
  return false;
}

export function closeDoor(propagateEvent:boolean=true):boolean{

  if(isDoorOpen()){
    const toggleDoorComponent = _door.getComponent(utils.ToggleComponent);
    toggleDoorComponent.toggle();
    _doorAudioSource.playOnce();  

    if(_multiplayerEnabled && propagateEvent)
    _channel.sendActions([_closeDoorAction])

    return true;
  }

  return false;
}

export function isDoorOpen():boolean{
  return _door.getComponent(utils.ToggleComponent).isOn();
}

