import { functions as Util } from "../functions.js";

export class User {
    constructor(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.date_joined = Util.getDate();
    }

    getFirstName() {
        return this.first_name;
    }
    getLastName() {
        return this.last_name;
    }
    getFullName() {
        return this.first_name + " " + this.last_name;
    }
    getDateJoined() {
        return this.date_joined;
    }

    updateName(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
    }
    modifyID(id) {
        if (id != this.id) {
            console.log("Cannot Modify ID After Assignment");
        } 
    }
}