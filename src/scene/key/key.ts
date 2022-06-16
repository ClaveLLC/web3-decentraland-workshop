export function createKey(parent:IEntity) : void {
  const key = new Entity('key')
  key.setParent(parent)
  const keyShape = new GLTFShape("models/key/Gold_Key_Genesis.glb")
  key.addComponentOrReplace(keyShape)
}