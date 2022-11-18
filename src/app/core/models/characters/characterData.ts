import { characterData } from "./characters"

export class Character {

     character_id: number

     data: characterData

     skills: Array<any>

     attacks: Array<any>

     passives : string

     universe : string

    constructor(character_id: number, data: characterData, skills: Array<any>,attacks:Array<any>,passives: string, universe: string){
        this.character_id = character_id
        this.data = data
        this.skills = skills
        this.attacks = attacks
        this.passives = passives
        this.universe = universe
    }

}