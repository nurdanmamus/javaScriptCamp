function addToCart(productName) {  
    console.log("Sepete eklendi : " + productName)
}

addToCart();

let sayHello = () =>{ 
   console.log("Hello World!")
}

sayHello();

let sayHello2 = function () {
    console.log("Hello World 2"); 
}

sayHello2(); 

let product1 = {productName:"Elma", unitPrice:10, quantity:5}
function addToCart3(product) {
    console.log("Ürün : "+product.productName) 
}
addToCart3(product1)

let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5} 
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)  

function addToCart4(x) { 
     console.log(products) 
}

let products = [ 
    {productName:"Elma", unitPrice:10, quantity:5}, 
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Elma", unitPrice:10, quantity:5}
]

addToCart4(products) 

//rest,dizi olarak tutuluyor,toparlar 
function add(bisey,...numbers) {  
    let total = 0
    for (let i = 0; i < numbers.length; i++) { 
        total = total + numbers[i]       
    }
    console.log(total)  
}

add(20,40)

//spread ,ayrıştırır
let numbers = [30,10,100,55,88]
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri,x]] = [    
    {name:"İç Anadolu",population:"20M"},  
    {name:"Marmara",population:"30M"},
    {name:"Karadeniz",population:"10M"},
    [
      ["Ankara","Konya"],
      ["İstanbul","Bursa"],
      ["Sinop","Trabzon"], 
    ] 
]  

console.log(icAnadolu)
console.log(marmara)  
console.log(icAnadoluSehirleri) 
console.log(x)

let newProductName,newUnitPrice,newQuantity  
({productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity}=
{productName:"Elma", unitPrice:10, quantity:5}) 

console.log(newProductName) 


 