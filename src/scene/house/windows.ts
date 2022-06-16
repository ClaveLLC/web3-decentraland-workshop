export function createWindows(parent:IEntity):void{

    const windowXVClosed = new Entity('windowXVClosed')
    windowXVClosed.setParent(parent)
    const transform10 = new Transform({
    position: new Vector3(3, 0.5, 6),
    rotation: new Quaternion(-3.4061716849695866e-15, -1, 1.1920927533992653e-7, 0),
    scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537)
    })
    windowXVClosed.addComponentOrReplace(transform10)
    const gltfShape4 = new GLTFShape("models/df27f718-4240-4b8c-978d-10c98f8de226/Window 2x2 V3 Closed.glb")
    gltfShape4.withCollisions = true
    gltfShape4.isPointerBlocker = true
    gltfShape4.visible = true
    windowXVClosed.addComponentOrReplace(gltfShape4)
    
    const windowXClosed = new Entity('windowXClosed')
    windowXClosed.setParent(parent)
    const transform11 = new Transform({
    position: new Vector3(1.5657070875167847, 1.0989809036254883, 10.11491584777832),
    rotation: new Quaternion(-2.185434577650267e-15, 0.7071068286895752, -8.429369557916289e-8, -0.7071068286895752),
    scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
    })
    windowXClosed.addComponentOrReplace(transform11)
    const gltfShape5 = new GLTFShape("models/664f93d4-0d5c-4205-8bc6-7253bebcc059/Window 4x4 Closed.glb")
    gltfShape5.withCollisions = true
    gltfShape5.isPointerBlocker = true
    gltfShape5.visible = true
    windowXClosed.addComponentOrReplace(gltfShape5)

}

