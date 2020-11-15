import fs from 'fs'

import { University } from "./classes/University.js";
import { Instructor } from "./classes/Instructor.js";
import { Course } from "./classes/Course.js";
import { Student } from "./classes/Student.js";

const courses = [];    
const instructors = [];
const students = [];

const byu = new University("BYU");
console.log("ID: " + byu.showID());

const app = {
    init() {
        this.main();
    },
    commandLineInput() {
        if (process.argv.length < 3) {
            console.log('Error. Please enter a filenames. ');
            process.exit(0);
        }
    },
    main() {
        this.commandLineInput();
        this.addCourses();
    },

    addCourses() {
        var filename = process.argv[2];
        console.log(filename);
        var str = fs.readFileSync(filename, 'utf8');
        // Split each line into one array
        const arr = str.toString().replace(/\r\n/g,'\n').split('\n');
        for (let i = 0; i < arr.length; i++) {
            const line = arr[i].split(" ");
            const department = line[0];
            const name = line[1];
            const level = line[2];
            const credits = line[3];
            const ins_first_name = line[4];
            const ins_last_name = line[5];
            
            const instructor = this.getInstructor(ins_first_name, ins_last_name);
            const course = new Course(name, level, credits, department, instructor);
            courses.push(course);
            instructor.addClassTeaching(course);
            
        }
        console.log("length: " + instructors.length);
        for (const instructor of instructors) {
            console.log("Instructor: " + instructor.getFullName());
            console.log(instructor.getCoursesTeaching());
        }
    },

    CoursesAndInstructors() {
        const instructor = this.getInstructor(ins_first_name, ins_last_name);
        const course = new Course(name, level, credits, department, instructor);
        courses.push(course);
        instructor.addClassTeaching(course);
    },

    instructorExists(fullname) {
        if (instructors.length == 0) {
            //console.log("false. no one exists.");
            return false;
        } else {
            var result = instructors.find(obj => {
                return obj.getFullName() === fullname;
              })
            if (result) {
                //console.log("true. found existing");
                return true;
            } else {
                //console.log("false. not found");
                    return false;
            }
        }
    },
    locateInstructor(fullname) {
        for (const instructor of instructors) {
            if (fullname == instructor.getFullName()) {
                //console.log("located instructor");
                return instructor;
            } 
        }
    },
    getInstructor(ins_first_name, ins_last_name) {
        const ins_full_name = ins_first_name + " " + ins_last_name;
        //console.log("fullName: " + ins_full_name);
        if (this.instructorExists(ins_full_name) == false) {
            const instructor = new Instructor(ins_first_name, ins_last_name);
            instructors.push(instructor);
            return instructor;
        } else {
            const instructor = this.locateInstructor(ins_full_name);
            return instructor;
        }
    },
}

app.init();



