import { createWalls } from "./walls"
import { createRoof } from "./roof"
import { createWindows } from "./windows"
import { createOrnaments } from "./ornaments"
import { createDoor } from "./door"


export function createHouse():void{

    const house = new Entity('house')

    createWalls(house);
    createRoof(house);
    createWindows(house);
    createOrnaments(house);
    createDoor(house);

    engine.addEntity(house)
}



