import { MapData } from "./mapData";

export class Map {

    map_id: number;

    universe: string;

    data : MapData;

    constructor(map_id: number, universe: string, data: MapData){
        this.map_id = map_id;
        this.universe = universe;
        this.data = data;
    }

}
