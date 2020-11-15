import { User } from "./User.js";
import { functions as Util } from "../functions.js";

export class Student extends User {

    constructor(first_name, last_name) {
        super(first_name, last_name);
        this.id = Util.generateStudentID();
        this.enrolled_courses = [];
        this.current_credits = 0;
        this.completed_credits = 0;
    }

    addCredits(int) {
        this.current_credits += int;
    }
    deleteCredits(int){
        this.current_credits -= int;
    }
    resetCurrentCredits() {
        this.current_credits = 0;
    }

    addCourse(course) {
        this.enrolled_courses.push(course);
    }

    getStudentID() {
        return this.id;
    }
    getEnrolledCourses() {
        return this.enrolled_courses;
    }
    getCurrentCreditCount() {
        return this.current_credits;
    }
    getCompletedCredits() {
        return this.completed_credits;
    }

    printStudentID() {
        console.log("Showing ID Number for student: " + this.getFullName())
        console.log(this.id);
    }

    printStudent() {
        console.log(this.getFullName());
    }

}