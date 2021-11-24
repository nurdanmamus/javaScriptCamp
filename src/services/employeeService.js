import { users } from "../data/users.js";
import DataError from "../models/dataError.js";
import { EMPLOYEE } from "../data/types.js"; 
import UserService from "./userService.js";

export default class employeeService  extends UserService{
    constructor(loggerService){
        this.errors = [] 
        this.employees = []
        this.loggerService = loggerService 
    }
 
    checkTypeForEmployee=(users)=>{   
        for (const user of users) {     
            if (this.types.some(type=> type === user[EMPLOYEE])) {     
                //this.errors.push(new DataError("Wrong user type1", user));
                return true;
            } 
        }
    }

    loadForEmployee(users,requiredFields){
        for (const user of users) {
            if (checkTypeForEmployee && checkRequiredField(user,requiredFields)&&
            checkForAge(user)) {   
                this.employees.push(user)
            }
        }
    }

    addEmployee(user){ 
        this.employees.push(user)
        this.loggerService.log(user) 
    }
}