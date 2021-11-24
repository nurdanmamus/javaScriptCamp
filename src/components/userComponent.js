import  { BaseLogger, ElasticLogger, MongoLogger} from "../crossCuttingConcerns/logger.js"  
import User from "../models/user.js"
import UserService from "../services/userService.js" 
import { users } from "../data/users.js";  
import customerService from "../services/customerService.js";
import employeeService from "../services/employeeService.js";


console.log("user component yüklendi")

let logger1 = new BaseLogger()     
let userService = new customerService(logger1)  
let userService1 = new employeeService(logger1) 

let user1 = new User(1,"Engin","Demiroğ","Ankara"); 
let user2 = new User(2,"Derin","Demiroğ","Ankara");   

//userService.add(user1)  
//userService.add(user2)  

/*console.log(userService.list()) 
console.log(userService.getById(2)) 


let customer = { id: 1, firstName: "Engin" }

//prototyping
customer.lastName = "Demiroğ" 
console.log(customer.lastName)*/ 

console.log("------------")

userService.loadForCustomer(users)   
userService.listCustomers() 
//userService1.loadForEmployee(users) 

//userService.checkTypes()     

// console.log(userService.customers) 
// console.log(userService.employees)
 //console.log(userService.errors)   

//validate();  



  
  //validate({password: "bad"}, constraints); 