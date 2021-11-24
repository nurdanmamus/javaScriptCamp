import { users } from "../data/users.js";
import DataError from "../models/dataError.js";
import { CUSTOMER } from "../data/types.js"; 
import UserService from "./userService.js";

export default class customerService extends UserService{
    constructor(loggerService){
        this.errors = [] 
        this.customers = []
        this.loggerService = loggerService  
    }
 
    checkTypeForCustomer=(user)=>{   
       // for (const user of users) {     
            if (this.types.some(type=> type === user[CUSTOMER])) {     
                //this.errors.push(new DataError("Wrong user type1", user));
                return true;
            } 
       // }
    }

    // checkCustomerValidityForErrors1(user,requiredFields) { 
    //     if (!requiredFields.every(field => user.hasOwnProperty(field))) {
    //         this.errors.push(
    //             new DataError(`Validation problem. ${field} is required`, user))
    //     }     
    // }

    loadForCustomer(users,requiredFields){ 
        for (const user of users) {
            if (checkTypeForCustomer(user) && checkRequiredField(user,requiredFields)&&
            checkForAge(user)) { 
                addCustomer(user) 
            }
        }
    }

    addCustomer(user){
        this.customers.push(user)
        this.loggerService.log(user)
    }

    listCustomers() {  
        return this.customers
    } 

    getCustomerById(id) {
        return this.customers.find(u => u.id === id)
    }

    getCustomersSorted(customers) { 
        let sortedCustomer = customers.slice().sort((a, b) => a.id - b.id);
        return sortedCustomer; 
        // return this.customers.sort((customer1, customer2) => {
        //     if (customer1.firstName > customer2.firstName) {
        //         return 1;
        //     } else if (customer1.firstName === customer2.firstName) {
        //         return 0;
        //     } else {
        //         return -1
        //     }
        // })
    }
}