import { functions as Util } from "../functions.js";
import { Department } from "./Department.js";

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

    addDepartments(array) {
        for (var a of array) {
            a = new Department(a);
            this.departments.push(a);
        }
    }
    addToDepartment(department, obj, specifier) {
        if (specifier == "course") {
            department.addCourse(obj);
        } else if (specifier == "instructor") {
            department.addInstructor(obj);
        } else {
            "Unable to add obj to Department."
        }
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

    getInstructors() {
        return this.instructors;
    }
    getDepartments() {
        return this.departments;
    }
    getStudents() {
        return this.students;
    }
    getCourses() {
        return this.courses;
    }

    printAll() {
        this.printCourses();
        this.printDepartments();
        this.printInstructors();
        this.printStudents();
    }
    printCourses() {
        console.log("\nCOURSES OFFERED: ");
        for (var i = 0; i < this.courses.length; i++) {
            console.log((i+1) + ") " + this.courses[i].getCourse());
        }
    }
    printDepartments() {
        console.log("\nUNIVERSITY DEPARTMENTS: ");
        for (var i = 0; i < this.departments.length; i++) {
            console.log((i+1) + ") " + this.departments[i].getDepartment());
        }
    }
    printInstructors() {
        console.log("\nUNIVERSITY INSTRUCTORS: ");
        for (var i = 0; i < this.instructors.length; i++) {
            console.log((i+1) + ") " + this.instructors[i].getFullName());
        }
    }
    printStudents() {
        console.log("\nUNIVERSITY STUDENTS: ");
        for (var i = 0; i < this.students.length; i++) {
            console.log((i+1) + ") " + this.students[i].getFullName());
        }
    }
}