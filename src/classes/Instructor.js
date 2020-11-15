import { User } from "./User.js";
import { functions as Util } from "../functions.js"

export class Instructor extends User {
    constructor(first_name, last_name) {
        super(first_name, last_name);
        this.id = Util.generateInstructorID();
        this.courses_teaching = [];  
    }

    getInstructorID() {
        return this.id;
    }
    getCoursesTeaching() {
        let course_names = [];
        for (let i = 0; i < this.courses_teaching.length; i++) {
            const name = this.courses_teaching[i].course_name;
            const level = this.courses_teaching[i].course_level;
            let course = name + " " + level;
            course_names.push(course);
        }
        return course_names;
    }

    addClassTeaching(classObj) {
        this.courses_teaching.push(classObj);
    }
}