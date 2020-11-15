const numbers = "0123456789";
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMONPQRSTUVWXYZ";
const chars = numbers.concat(letters);

export const functions = {

    generateStudentID() {
        let id = "";
        const prefix = this.returnNums(2);
        const suffix = this.returnNums(4);
        id = `${prefix}-${suffix}`;
        return id;
    },
    generateInstructorID() {
        let id = "";
        const prefix = this.returnNums(3);
        const suffix = this.returnLets(1);
        id = `${prefix}-${suffix}`;
        return id;
    },
    generateCourseID() {
        let id = "";
        const prefix = this.returnNums(1);
        const suffix = this.returnChar(3);
        id = `${prefix}-${suffix}`;
        return id;
    },
    generateUniversityID() {
        let id = "";
        const prefix = this.returnChar(3);
        const suffix = this.returnLets(2) + this.returnNums(1);
        id = `${prefix}-${suffix}`;
        return id;
    },

    // <----- NUMBERS ----->
    getRandomNumber() {
        const randomNum = numbers.charAt(Math.floor(Math.random() * numbers.length));
        return randomNum;
    },
    returnNums(quantity) {
        let string = "";
        for (let i = 0; i < quantity; i++) {
            const randomNumber = this.getRandomNumber();
            string += randomNumber;
        }
        return string;
    },
    // <----- NUMBERS ----->
    getRandomLetter() {
        const randomLet = letters.charAt(Math.floor(Math.random() * letters.length));
        return randomLet;
    },
    returnLets(quantity) {
        let string = "";
        for (let i = 0; i < quantity; i++) {
            const randomLetter = this.getRandomLetter();
            string += randomLetter;
        }
        return string;
    },
    // <----- NUMBERS + LETTERS ----->
    getRandomChar() {
        const random_char = chars.charAt(Math.floor(Math.random() * chars.length));
        return random_char;
    },
    returnChar(quantity) {
        let string = "";
        for (let i = 0; i < quantity; i++) {
            const randomChar = this.getRandomChar();
            string += randomChar;
        }
        return string;
    },

    getDate() {
        var current_date = new Date();
        //prettier-ignore
        var date = current_date.getDate() + "/"
                    + (current_date.getMonth()+1)  + "/" 
                    + current_date.getFullYear();
        return date;
      },
      getTime() {
        var current_time = new Date();
        //prettier-ignore
        var time = current_time.getHours() + ":"
                + current_time.getMinutes() + ":"
                + current_time.getSeconds();
        return time;
      },

}