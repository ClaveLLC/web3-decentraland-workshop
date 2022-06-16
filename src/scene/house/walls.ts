export function createWalls(parent:IEntity):void{

    const concreteWall = new Entity('concreteWall')
    concreteWall.setParent(parent)
    const transform3 = new Transform({
    position: new Vector3(10, 0, 12.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(4.11945104598999, 1, 0.9999998807907104)
    })
    concreteWall.addComponentOrReplace(transform3)
    const gltfShape2 = new GLTFShape("models/53aa3052-ccd7-4a05-be3f-f840acbff99e/Concrete_Wall.glb")
    gltfShape2.withCollisions = true
    gltfShape2.isPointerBlocker = true
    gltfShape2.visible = true
    concreteWall.addComponentOrReplace(gltfShape2)

    const concreteWall4 = new Entity('concreteWall4')
    concreteWall4.setParent(parent)
    concreteWall4.addComponentOrReplace(gltfShape2)
    const transform4 = new Transform({
    position: new Vector3(2, 0, 12.5),
    rotation: new Quaternion(2.4085271740892887e-15, -0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
    scale: new Vector3(3.1250016689300537, 1, -1.0000011920928955)
    })
    concreteWall4.addComponentOrReplace(transform4)

    const concreteWall9 = new Entity('concreteWall9')
    concreteWall9.setParent(parent)
    const transform5 = new Transform({
    position: new Vector3(5.5, 0, 6.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1.8907544612884521, 1, 0.9999998807907104)
    })
    concreteWall9.addComponentOrReplace(transform5)
    concreteWall9.addComponentOrReplace(gltfShape2)

    const concreteWall13 = new Entity('concreteWall13')
    concreteWall13.setParent(parent)
    concreteWall13.addComponentOrReplace(gltfShape2)
    const transform6 = new Transform({
    position: new Vector3(10, 0, 2.5),
    rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
    scale: new Vector3(5.000014305114746, 1, 1.0000030994415283)
    })
    concreteWall13.addComponentOrReplace(transform6)

    const concreteWall15 = new Entity('concreteWall15')
    concreteWall15.setParent(parent)
    concreteWall15.addComponentOrReplace(gltfShape2)
    const transform7 = new Transform({
    position: new Vector3(5.795167446136475, 0, 4.5009002685546875),
    rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
    scale: new Vector3(1.000004768371582, 1, 1.000004768371582)
    })
    concreteWall15.addComponentOrReplace(transform7)

    const concreteWall16 = new Entity('concreteWall16')
    concreteWall16.setParent(parent)
    concreteWall16.addComponentOrReplace(gltfShape2)
    const transform8 = new Transform({
    position: new Vector3(5.5, 0, 2.5),
    rotation: new Quaternion(-2.308833302021589e-15, 1, -1.1920927533992653e-7, 0),
    scale: new Vector3(2.250009059906006, 1, 1.0000038146972656)
    })
    concreteWall16.addComponentOrReplace(transform8)
}

