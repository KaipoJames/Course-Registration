import { functions as Util } from "../functions.js";

export class Department {
    #id = Util.generateDepartmentID();
    instructors = [];

    constructor(name) {
        this.name = name;
    }

    showID() {
        return this.#id;
    }

    assignInstructor(instructorObj) {
        this.instructors.push(instructorObj);
    }
}