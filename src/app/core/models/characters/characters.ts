import { UnlockPrice } from "./unlockPrice"

export class characterData {
     name: string
     specialization: string
     title: string
     description: string
     image: string
     unlock: UnlockPrice
     voiceActor: string
     attributes: Array<any>

    constructor(name: string, specialization: string, title: string, description:string, image:string,unlock: UnlockPrice, voiceActor:string, attributes:Array<any>){
        this.name = name
        this.specialization = specialization
        this.title = title
        this.description = description
        this.image = image
        this.unlock = unlock
        this.voiceActor = voiceActor
        this.attributes = attributes
    }

}