console.log("Merhaba Kodlama.io")   

//JS type save değildir. 
// var , saf javaScriptten geliyor. Let ecmaScript
let dolarBugun = 9.30

let dolarDun = 9.20

{
    let dolarDun = 9.10 
}
console.log(dolarDun);

const euroDun = 11.2
//euroDun = 11
console.log(euroDun);

let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu konut kredisi"]

console.log("</ul>")

for (let i = 0; i < konutKredileri.length; i++) {  
    console.log("<li>" +konutKredileri[i]+ "</li>")      
}

let student = {id:1,name:"Engin"}  

function save(ogrenci,puan=10) { 
    console.log(puan + "/" +ogrenci.name)     
}
 
function save(puan=10 , ogrenci) {  
    console.log(puan + "/" +ogrenci.name)      
}

save(undefined,student);       

let students = ["Engin Demiroğ","Halit Kalaycı","Engin Toprak"]; 

console.log(students);

let students2 = [student,{id:2,name:"Nunu"}];
console.log(students2); 

//rest 
//params c#
//varArgs java 
let showProducts = function (id,...products) {
     console.log(id);
     console.log(products);
}

console.log(typeof showProducts); 
showProducts(10,"Elma","Armut","Karpuz"); 
showProducts(10,["Elma","Armut","Karpuz"]);  


//spread
let points = [1,2,3,4,50,4,60,14]
console.log(...points)
console.log(Math.max(...points))   
console.log(..."ABC","D",..."EFG","H") 

//destructuring
//elinizdeki arrayin değerlerini değişkenlere atama
let populations = [10000,20000,30000,[4000,7888]] 
let [small,medium,high,[veryHigh,maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum) 

function someFunction([small1,nunu],number) {
    console.log(small1 +"/" +nunu);    
}

someFunction(populations); 

let category = {id:1,name:"içecek"}
console.log(category.id)
console.log(category["name"]) 

let {id,name} = category

//saf js de class yok. function var. 
class Customer {
    constructor(id,customerNumber){
       this.id = id; // prototyping, türetilen nesneye atıyoruz.
       this.customerNumber = customerNumber;
       //instance'a id ve customerNumber ekledik. 
    }
}

let customer = new Customer(1,"12234");  
//instance prototyping 
customer.name = "nunu";  
console.log(customer.name); 

//class prototyping 
Customer.bisey = "bir şey";
console.log(Customer.bisey);
console.log(customer.customerNumber);

class IndividualCustomer extends Customer{
  constructor(firstName,id,customerNumber){
    super(id,customerNumber); 
    this.firstName = firstName; 
  }
}

class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber); 
        this.companyName = companyName;   
      }
} 

let products = [
    {id:1, name:"Mac",  unitPrice:23000}, 
    {id:2, name:"Asus", unitPrice:16000},
    {id:3, name:"Lenovo", unitPrice:14000},
    {id:4, name:"Dell", unitPrice:12000},
    {id:5, name:"Casper", unitPrice:16000},
]

console.log("<ul>")
products.map(product=>console.log(`<li>${product.name}</li>`))  
console.log("</ul>")

products.map(product=>{
    console.log(product) 
    console.log(`<li>${product.name}</li>`) 
})

let filteredProducts = products.filter(product=>product.unitPrice>12000) 
console.log(filteredProducts) 

let cartTotal = products
                .filter(p=>p.unitPrice>13000)
                .map(p=>{
                    p.unitPrice = p.unitPrice*1.18
                    return p
                })
                .reduce((acc,p)=>acc+p.unitPrice,0) 

console.log(cartTotal)

