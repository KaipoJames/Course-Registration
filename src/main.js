import fs from 'fs'
import { University } from "./classes/University.js";
import { Department } from "./classes/Department.js";
import { Instructor } from "./classes/Instructor.js";
import { Course } from "./classes/Course.js";
import { Student } from "./classes/Student.js";
import { functions as Util } from "./functions.js";

const departmentNames = ["Art", "Math", "Music", "History", "Hawaiian", "Computer-Science", "Science", "Business"];
const byu = new University("BYU");
byu.addDepartments(departmentNames);

const courses = byu.courses;
const instructors = byu.instructors;
const students = byu.students;
const departments = byu.departments;

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
        this.addStudent();
    },

    addCourses() {
        var courses_file = process.argv[2];
        var str = fs.readFileSync(courses_file, 'utf8');
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
            
            const instructor = this.getObject(ins_first_name, ins_last_name, instructors, "Instructor");
            const course = new Course(name, level, credits, department, instructor);
            byu.addCourse(course);
            instructor.addClassTeaching(course);
            
        }
        // console.log("length: " + instructors.length);
        // for (const instructor of instructors) {
        //     console.log("Instructor: " + instructor.getFullName());
        //     console.log(instructor.getCoursesTeaching());
        // }
    },

    addStudent() {
        var student_file = process.argv[3];
        var str = fs.readFileSync(student_file, 'utf8');
        const arr = str.toString().replace(/\r\n/g,'\n').split('\n');
        console.log(arr);
        for (let i = 0; i < arr.length; i++) {
            const div = arr[i].split(" ");
            const stu_first_name = div[0];
            const stu_last_name = div[1];
            const course_name_to_add = div[2];
            const course_level = div[3];

            const student = this.getObject(stu_first_name, stu_last_name, students, "Student");
            const target_course = Util.getCourse(course_name_to_add, courses);
            target_course.enrollStudent(student);
            console.log(target_course);
            console.log(student.getEnrolledCourses())
        }
    },

    objectExists(fullname, array) {
        if (array.length == 0) {
            return false;
        } else {
            var result = array.find(obj => {
                return obj.getFullName() === fullname;
              })
            if (result) {
                return true;
            } else {
                    return false;
            }
        }
    },
    locateObject(fullname, array) {
        for (const user of array) {
            if (fullname == user.getFullName()) {
                return user;
            } 
        }
    },
    getObject(ins_first_name, ins_last_name, array, type) {
        const ins_full_name = ins_first_name + " " + ins_last_name;
        if (type == "Instructor") {
            if (this.objectExists(ins_full_name, instructors) == false) {
                const instructor = new Instructor(ins_first_name, ins_last_name);
                array.push(instructor);
                return instructor;
            } else {
                const instructor = this.locateObject(ins_full_name, array);
                return instructor;
            }
        } else if (type == "Student") {
            if (this.objectExists(ins_full_name, instructors) == false) {
                const student = new Student(ins_first_name, ins_last_name);
                array.push(student);
                return student;
            } else {
                const student = this.locateObject(ins_full_name, array);
                return student;
            }
        }
    },

}

app.init();

//byu.printAll();



