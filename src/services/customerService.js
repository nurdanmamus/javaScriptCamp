import { users } from "../data/users.js";
import DataError from "../models/dataError.js";
import { CUSTOMER, REQUARED_FIELD_FOR_CUSTOMER } from "../data/types.js"; 
import UserService from "./userService.js";

export default class customerService extends UserService{
    constructor(loggerService){
        super(loggerService) 
        this.errors = [] 
        this.customers = []
        this.types  = [CUSTOMER] 
        this.requiredFields =  [REQUARED_FIELD_FOR_CUSTOMER] 
        this.loggerService = loggerService  
              
    }
 
    checkTypeForCustomer(user){     
       // for (const user of users) {      
           /* if (this.types.find(function(){user["type"]===CUSTOMER})) {        
                //this.errors.push(new DataError("Wrong user type1", user));
                return true;
            }   */

             if (user["type"]===CUSTOMER) {         
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

    loadForCustomer(users){         
        for (const user of users) {
            if (this.checkTypeForCustomer(user) && super.checkForAge(user)
            && super.checkRequiredField(user,this.requiredFields)) {              
                this.addCustomer(user)  
            }           
        }
    }

    addCustomer(user){
        this.customers.push(user)
        this.loggerService.log(user)
    }

    listCustomers() {   
     //   return this.customers  
        console.log(this.customers)
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