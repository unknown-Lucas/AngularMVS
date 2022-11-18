import { layout } from "./layout";

export class MapData {
    mapName: string;
    origin: string;
    image: string;
    layout: Array<layout>
    npcs: Array<string>

    constructor(mapName: string, origin: string, image: string, layout: Array<layout>, npcs: Array<string>) {
        this.mapName = mapName;
        this.origin = origin;
        this.image = image;
        this.layout = layout;
        this.npcs = npcs;
    }
}
