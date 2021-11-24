import { users } from "../data/users.js";
import DataError from "../models/dataError.js";
import { CUSTOMER, EMPLOYEE, REQUARED_FIELD_FOR_EMPLOYEE } from "../data/types.js"; 
import UserService from "./userService.js";


export default class employeeService  extends UserService{
    constructor(loggerService){
        super(loggerService)  
        this.errors = [] 
        this.employees = []
        this.types  = [EMPLOYEE]  
        this.requiredFields = REQUARED_FIELD_FOR_EMPLOYEE
        this.loggerService = loggerService        
    }
 
    checkTypeForEmployee(user){   s 
        //for (const user of users) {     
            if (user["type"]===EMPLOYEE) {         
                //this.errors.push(new DataError("Wrong user type1", user));
                //this.types.some(type=> type === 
                return true;
            }  
       // }
    }

    loadForEmployee(users){   
        for (const user of users) {
            if (this.checkTypeForEmployee && checkRequiredField(user,this.requiredFields)&&
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