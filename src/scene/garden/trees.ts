export function createTrees(parent:IEntity):void {
    const palmTree = new Entity('palmTree')
    palmTree.setParent(parent);
    const transform16 = new Transform({
      position: new Vector3(12.5, 0, 11.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    palmTree.addComponentOrReplace(transform16)
    const gltfShape8 = new GLTFShape("models/647f405c-cb12-436e-8116-321404a898b0/PalmTree_01/PalmTree_01.glb")
    gltfShape8.withCollisions = true
    gltfShape8.isPointerBlocker = true
    gltfShape8.visible = true
    palmTree.addComponentOrReplace(gltfShape8)
}