import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../64c448a3-f69c-4bce-b9f4-5bb5f0669084/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("2c66317c-4923-4094-ad90-8ad72db010b1/FloorBaseTiles_01/FloorBaseTiles_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const concreteWall = new Entity('concreteWall')
engine.addEntity(concreteWall)
concreteWall.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(10, 0, 12.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.11945104598999, 1, 0.9999998807907104)
})
concreteWall.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("53aa3052-ccd7-4a05-be3f-f840acbff99e/Concrete_Wall.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
concreteWall.addComponentOrReplace(gltfShape2)

const concreteWall4 = new Entity('concreteWall4')
engine.addEntity(concreteWall4)
concreteWall4.setParent(_scene)
concreteWall4.addComponentOrReplace(gltfShape2)
const transform4 = new Transform({
  position: new Vector3(2, 0, 12.5),
  rotation: new Quaternion(2.4085271740892887e-15, -0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.1250016689300537, 1, -1.0000011920928955)
})
concreteWall4.addComponentOrReplace(transform4)

const concreteWall9 = new Entity('concreteWall9')
engine.addEntity(concreteWall9)
concreteWall9.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(5.5, 0, 6.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.8907544612884521, 1, 0.9999998807907104)
})
concreteWall9.addComponentOrReplace(transform5)
concreteWall9.addComponentOrReplace(gltfShape2)

const concreteWall13 = new Entity('concreteWall13')
engine.addEntity(concreteWall13)
concreteWall13.setParent(_scene)
concreteWall13.addComponentOrReplace(gltfShape2)
const transform6 = new Transform({
  position: new Vector3(10, 0, 2.5),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(5.000014305114746, 1, 1.0000030994415283)
})
concreteWall13.addComponentOrReplace(transform6)

const concreteWall15 = new Entity('concreteWall15')
engine.addEntity(concreteWall15)
concreteWall15.setParent(_scene)
concreteWall15.addComponentOrReplace(gltfShape2)
const transform7 = new Transform({
  position: new Vector3(5.795167446136475, 0, 4.5009002685546875),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000004768371582, 1, 1.000004768371582)
})
concreteWall15.addComponentOrReplace(transform7)

const concreteWall16 = new Entity('concreteWall16')
engine.addEntity(concreteWall16)
concreteWall16.setParent(_scene)
concreteWall16.addComponentOrReplace(gltfShape2)
const transform8 = new Transform({
  position: new Vector3(5.5, 0, 2.5),
  rotation: new Quaternion(-2.308833302021589e-15, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(2.250009059906006, 1, 1.0000038146972656)
})
concreteWall16.addComponentOrReplace(transform8)

const outdoorBoxLamp = new Entity('outdoorBoxLamp')
engine.addEntity(outdoorBoxLamp)
outdoorBoxLamp.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(5.5, 2, 5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
})
outdoorBoxLamp.addComponentOrReplace(transform9)
const gltfShape3 = new GLTFShape("2e34764f-6c52-4dcb-beb7-19f0eb8c2cc3/Outdoor Box Lamp3.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
outdoorBoxLamp.addComponentOrReplace(gltfShape3)

const windowXVClosed = new Entity('windowXVClosed')
engine.addEntity(windowXVClosed)
windowXVClosed.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(3, 0.5, 6),
  rotation: new Quaternion(-3.4061716849695866e-15, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537)
})
windowXVClosed.addComponentOrReplace(transform10)
const gltfShape4 = new GLTFShape("df27f718-4240-4b8c-978d-10c98f8de226/Window 2x2 V3 Closed.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
windowXVClosed.addComponentOrReplace(gltfShape4)

const windowXClosed = new Entity('windowXClosed')
engine.addEntity(windowXClosed)
windowXClosed.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(1.5657070875167847, 1.0989809036254883, 10.11491584777832),
  rotation: new Quaternion(-2.185434577650267e-15, 0.7071068286895752, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
})
windowXClosed.addComponentOrReplace(transform11)
const gltfShape5 = new GLTFShape("664f93d4-0d5c-4205-8bc6-7253bebcc059/Window 4x4 Closed.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
windowXClosed.addComponentOrReplace(gltfShape5)

const roofPurpleTiles = new Entity('roofPurpleTiles')
engine.addEntity(roofPurpleTiles)
roofPurpleTiles.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(9.831555366516113, 0, 12.510351181030273),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.0004570484161377, 1, 1)
})
roofPurpleTiles.addComponentOrReplace(transform12)
const gltfShape6 = new GLTFShape("3e0cedc9-be07-47e1-ba83-734aa76eb8c2/PurpleTileRoof.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
roofPurpleTiles.addComponentOrReplace(gltfShape6)

const roofPurpleTiles2 = new Entity('roofPurpleTiles2')
engine.addEntity(roofPurpleTiles2)
roofPurpleTiles2.setParent(_scene)
roofPurpleTiles2.addComponentOrReplace(gltfShape6)
const transform13 = new Transform({
  position: new Vector3(9.840986251831055, 0, 8.532472610473633),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.0004570484161377, 1, 0.5)
})
roofPurpleTiles2.addComponentOrReplace(transform13)

const goldenKey = new Entity('goldenKey')
engine.addEntity(goldenKey)
goldenKey.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(4.6116156578063965, 0, 3.664081573486328),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
goldenKey.addComponentOrReplace(transform14)

const rug = new Entity('rug')
engine.addEntity(rug)
rug.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(4.631925106048584, 0, 3.667980670928955),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4999999403953552, 1, 0.9999999403953552)
})
rug.addComponentOrReplace(transform15)
const gltfShape7 = new GLTFShape("bf08e109-d3ef-42d2-8691-7817449a8a3d/Carpet_03/Carpet_03.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
rug.addComponentOrReplace(gltfShape7)

const palmTree = new Entity('palmTree')
engine.addEntity(palmTree)
palmTree.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(12.5, 0, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
palmTree.addComponentOrReplace(transform16)
const gltfShape8 = new GLTFShape("647f405c-cb12-436e-8116-321404a898b0/PalmTree_01/PalmTree_01.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
palmTree.addComponentOrReplace(gltfShape8)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
script1.init(options)
script1.spawn(goldenKey, {"target":"concreteWall","respawns":false}, createChannel(channelId, goldenKey, channelBus))