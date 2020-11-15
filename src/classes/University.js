import { functions as Util } from "../functions.js";

export class University {
    #id = Util.generateUniversityID();
    departments = [];
    instructors = [];
    students = [];
    courses = [];

    constructor(name) {
        this.name = name;
    }

    showID() {
        return this.#id;
    }

    addInstructor(instructor) {
        this.instructors.push(instructor);
    }
    addDepartment(department) {
        this.departments.push(department);
    }
    addInstructor(student) {
        this.students.push(student);
    }
    addCourse(course) {
        this.courses.push(course);
    }
}