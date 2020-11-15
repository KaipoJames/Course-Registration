import { functions as Util } from "../functions.js";

export class University {
    #id = Util.generateUniversityID();

    constructor(name) {
        this.name = name;
    }

    showID() {
        return this.#id;
    }
}