export function createFloor(parent:IEntity) : void {
    const entity = new Entity('entity')
    entity.setParent(parent);
    const gltfShape = new GLTFShape("models/2c66317c-4923-4094-ad90-8ad72db010b1/FloorBaseTiles_01/FloorBaseTiles_01.glb")
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
}