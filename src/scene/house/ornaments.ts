export function createOrnaments(parent:IEntity):void{
    const outdoorBoxLamp = new Entity('outdoorBoxLamp')
    outdoorBoxLamp.setParent(parent)
    const transform9 = new Transform({
    position: new Vector3(5.5, 2, 5),
    rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
    scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
    })
    outdoorBoxLamp.addComponentOrReplace(transform9)
    const gltfShape3 = new GLTFShape("models/2e34764f-6c52-4dcb-beb7-19f0eb8c2cc3/Outdoor Box Lamp3.glb")
    gltfShape3.withCollisions = true
    gltfShape3.isPointerBlocker = true
    gltfShape3.visible = true
    outdoorBoxLamp.addComponentOrReplace(gltfShape3)
}

