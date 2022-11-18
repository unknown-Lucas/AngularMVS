
export class layout {

    mode: string;
    description: string;

    constructor(mode: string, description: string) {
        this.mode = mode
        this.description = description
    }

    getMode(): string { return this.mode }

    getDescription(): string { return this.description }

}
