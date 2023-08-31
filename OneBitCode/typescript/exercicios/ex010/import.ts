import { Spaceship } from "./export";
//import * as _ from "lodash" (EM CASO DE BIBLIOTECA)

interface BattleSpaceship extends Spaceship {
   weapons: number
}

let xwing: BattleSpaceship = {
   name: "X-wing",
   pilot: 'Luke Skywalker',
   speed: 50,
   weapons: 4
}