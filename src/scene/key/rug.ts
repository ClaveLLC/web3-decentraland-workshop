export function createRug() : IEntity {
  const rug =  new Entity('rug')
  engine.addEntity(rug)
  const transform15 = new Transform({
    position: new Vector3(4.631925106048584, 0, 3.667980670928955),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(0.4999999403953552, 1, 0.9999999403953552)
  })
  rug.addComponentOrReplace(transform15)
  const gltfShape7 = new GLTFShape("models/bf08e109-d3ef-42d2-8691-7817449a8a3d/Carpet_03/Carpet_03.glb")
  gltfShape7.withCollisions = true
  gltfShape7.isPointerBlocker = true
  gltfShape7.visible = true
  rug.addComponentOrReplace(gltfShape7)

  return rug;
}