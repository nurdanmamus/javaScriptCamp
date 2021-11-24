import { users } from "../data/users.js";
import DataError from "../models/dataError.js";
import { EMPLOYEE,CUSTOMER } from "../data/types.js";

export default class UserService { //userService'i import ettiğimde default olarak bu fonksiyonu import et
    constructor(loggerService) {
         this.users = []    
        // this.employees = []
       //  this.customers = []   
       
        this.errors = [] 
        this.loggerService = loggerService 
        //  const yup = require("yup"); 
    }

    checkForAge(user){   
        if (!Number.isInteger(user.age)) {  
           return this.errors.push(new DataError(`Validation problem. ${user.age} is not a number`, user))
        } else{
            return true 
        }
    } 

    checkRequiredField(user,requiredFields) {        
       // console.log(requiredFields)    
        for (const field of requiredFields) { 
            if (!user[field]) {       
               return this.errors.push( 
                    new DataError(`Validation problem. ${field} is required`, user))
            }else{
                return true   
            }
                
        }   
        // if (!requiredFields.filter(field => user.hasOwnProperty(field))) { 
        //     this.errors.push(
        //         new DataError(`Validation problem. ${field} is required`, user))
        // }     
    }

    

    

   
    // load() {
    //     for (const user of users) {
    //         switch (user.type) {
    //             case "customer":
    //                // if (!this.checkCustomerValidityForErrors(user)) {
    //                     this.customers.push(user)
    //               //  } 
    //                 break;
    //             case "employee": 
    //               //  if (!this.checkEmployeeValidityForErrors(user)) {
    //                     this.employees.push(user)
    //                // }
    //                 break;
    //             default: 
    //                // this.errors.push(new DataError("Wrong user type", user))
    //                 break;
    //         }
    //     }
    // }

    //formik-yup
    // checkCustomerValidityForErrors(user) {
    //     let requiredFields = "id firstName lastName age city".split(" ")
    //     let hasErrors = false
    //     for (const field of requiredFields) {
    //         if (!user[field]) {
    //             hasErrors = true
    //             this.errors.push(
    //                 new DataError(`Validation problem. ${field} is required`, user))
    //         }
    //     }

    //     if (Number.isNaN(Number.parseInt(+user.age))) {
    //         hasErrors = true
    //         this.errors.push(new DataError(`Validation problem. ${user.age} is not a number`, user))
    //     }

    //     return hasErrors
    // }

   


    // checkEmployeeValidityForErrors(user) {
    //     let requiredFields = "id firstName lastName age city salary".split(" ")
    //     let hasErrors = false
    //     for (const field of requiredFields) {
    //         if (!user[field]) {
    //             hasErrors = true
    //             this.errors.push(
    //                 new DataError(`Validation problem. ${field} is required`, user))
    //         }
    //     }

    //     if (Number.isNaN(Number.parseInt(user.age))) {
    //         hasErrors = true
    //         this.errors.push(new DataError(`Validation problem. ${user.age} is not a number`, user))
    //     }
    //     return hasErrors
    // }
    // add(user) {
    //     // this.users.push(user) 
    //     switch (user.type) {
    //         case "customer":
    //             if (!this.checkCustomerValidityForErrors(user)) {
    //                 this.customers.push(user)
    //             }
    //             break;
    //         case "employee":
    //             if (!this.checkEmployeeValidityForErrors(user)) {
    //                 this.employees.push(user)
    //             }
    //             break;
    //         default:
    //             this.errors.push(
    //                 new DataError("This user can not be added. Wrong user type", user))
    //             break;
    //     }
    //     this.loggerService.log(user)
    // }


   

    


    static list() {
        // return this.users
    }
    static getById(id) {
        // return this.users.find(u => u.id === id) 
    }
}
//sayfa componenti. sayfaya bunu dahil ederken let userService = new userService()
//sayfa açılırken userService.List() çağırılır. 