import { createKey as crKey} from "./key"
import { createRug } from "./rug";

export function createKey():void{
  const rug = createRug();
  crKey(rug);
}
