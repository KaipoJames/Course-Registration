export class Department {
    constructor(name) {
        this.name = name;
    }

    assignInstructor(instructorObj) {
        this.instructors.push(instructorObj);
    }
}