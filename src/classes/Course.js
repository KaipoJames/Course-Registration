import { functions as Util } from "../functions.js";

export class Course {

    constructor(name, level, credits, department, instructor) {
        this.course_name = name;
        this.course_level = level;
        this.course_credits = credits;
        this.course_id = Util.generateCourseID();
        this.course_department = department;
        this.course_instructor = instructor;
    }

    getCourseName() {
        return this.course_name;
    }
    getCourseLevel() {
        return this.course_level;
    }
    getCourseID() {
        return this.course_id;
    }
    getCourseCredits() {
        return this.course_credits;
    }
    getCourseDepartment() {
        return this.course_department;
    }
    getCourseInstructor() {
        return this.course_instructor;
    }
    getEnrolledStudents() {
        return this.enrolled_students;
    }
    getEnrollmentLimit() {
        return this.enrollment_limit;
    }


    setCourseName(new_name) {
        this.name = new_name;
    }
    setCourseInstructor(instructor) {
        this.course_instructor = instructor;
    }
    setCourseEnrollmentLimit(int) {
        this.enrollment_limit = int;
    }

    enrollStudent(studentObj) {
        if (this.getEnrolledStudents().length >= this.getEnrollmentLimit()) {
            console.log("Class is Full.")
        } else {
            if (this.enrolled_students) {
                this.enrolled_students.push(studentObj);
            } else {
                this.enrolled_students = [];
                this.enrolled_students.push(studentObj);
            }
        }
    }
    removeStudent(studentObj) {
        if (this.enrolled_students) {
            var index = this.enrolled_students.indexOf(studentObj);
            if (index !== -1) this.enrolled_students.splice(index, 1);
        } else {
            this.enrolled_students = [];
            enrolled_students.push(studentObj);
        }
    }

    printCourse() {
        console.log(this.course_name + " " + this.course_level);
    }

    getCourse() {
        return this.course_name + " " + this.course_level;
    }

}