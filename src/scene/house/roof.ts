export function createRoof(parent:IEntity):void{
    const roofPurpleTiles = new Entity('roofPurpleTiles')
    roofPurpleTiles.setParent(parent)
    const transform12 = new Transform({
    position: new Vector3(9.831555366516113, 0, 12.510351181030273),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(2.0004570484161377, 1, 1)
    })
    roofPurpleTiles.addComponentOrReplace(transform12)
    const gltfShape6 = new GLTFShape("models/3e0cedc9-be07-47e1-ba83-734aa76eb8c2/PurpleTileRoof.glb")
    gltfShape6.withCollisions = true
    gltfShape6.isPointerBlocker = true
    gltfShape6.visible = true
    roofPurpleTiles.addComponentOrReplace(gltfShape6)

    const roofPurpleTiles2 = new Entity('roofPurpleTiles2')
    roofPurpleTiles2.setParent(parent)
    roofPurpleTiles2.addComponentOrReplace(gltfShape6)
    const transform13 = new Transform({
    position: new Vector3(9.840986251831055, 0, 8.532472610473633),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(2.0004570484161377, 1, 0.5)
    })
    roofPurpleTiles2.addComponentOrReplace(transform13)
}

