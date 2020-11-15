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

    addInstructor(instructorObj) {
        this.instructors.push(instructorObj);
    }
    addCourse(courseObj) {
        this.courses.push(courseObj)
    }

    printDepartment() {
        console.log(this.name);
    }

    getDepartment() {
        return this.name;
    }
}