import { functions as Util } from "../functions.js";

export class Department {
    #id = Util.generateDepartmentID();
    instructors = [];
    courses = [];

    constructor(name) {
        this.name = name;
    }

    showID() {
        return this.#id;
    }

    assignInstructor(instructorObj) {
        this.instructors.push(instructorObj);
    }

    printDepartment() {
        console.log(this.name);
    }

    getDepartment() {
        return this.name;
    }
}