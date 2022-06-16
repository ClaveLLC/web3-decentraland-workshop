import { createFloor } from "./floor"
import { createTrees } from "./trees"

export function createGarden():void{

  const garden = new Entity('garden')

  createFloor(garden);
  createTrees(garden);

  engine.addEntity(garden);
}

