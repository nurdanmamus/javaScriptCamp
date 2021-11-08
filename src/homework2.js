
//finding prime numbers
const isPrime    = "is a prime number";
const isNotPrime = "is not a prime number"; 
 

function findPrime(...numbers) {  
    let prime;
    for (let i = 0; i < numbers.length; i++) {
        prime = null;
        var sqrtnum=Math.floor(Math.sqrt(numbers[i]));  
        for(var j=2; j<sqrtnum+1; j++) { // sqrtnum+1
            if(numbers[i] % j == 0) {
                prime = false;     
                console.log(numbers[i] + isNotPrime)       
                break;           
            }
        }         
        if (prime == null) {  
            console.log(numbers[i] + isPrime);    
        }                             
    }
}  

findPrime(45,2,7,29,8,3,10,21,975)     

//finding friend numbers, single responsibility

let findSubMultibles = (number) => {  
   let subMultibles = new Array();   
   for (let i = 0; i < number; i++) { 
     if (number!= 0 && number % i == 0) {
        subMultibles[subMultibles.length] = i;
     }                   
   }  
   return subMultibles;  
}

let sumOfSubMultibles = (numbers)=>{    
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]  
    }
    return total; 
}

//console.log(findSubMultibles(6)); 
//console.log(sumOfSubMultibles(findSubMultibles(6)));     

function findFriendNumbers(number1,number2) {

    if (sumOfSubMultibles(findSubMultibles(number1))
    === number2 &&  sumOfSubMultibles(findSubMultibles(number2)) === number1) { 
         console.log("Friend Numbersss"); 
    }else{
        console.log("Not friend numbers");
    }  
    //console.log(sumOfSubMultibles(findSubMultibles(number1))) 
    //console.log(sumOfSubMultibles(findSubMultibles(number2)))      
} 

findFriendNumbers(220,284);  

const listPerfectNumber = (upperBound=1000)=>{ 
  for (let i = 1; i < upperBound; i++) { 
       if (sumOfSubMultibles(findSubMultibles(i))==i) {  
        console.log(i);  
       }    
  }
} 

listPerfectNumber();    

//All prime numbers up to 1000

const listPrimeNumber = (upperBound=1000)=>{ 
    let prime;
    for (let i = 2; i < upperBound; i++) { 
        prime = null;
        var sqrtnum=Math.floor(Math.sqrt(i));  
        for(var j=2; j<sqrtnum+1; j++) { // sqrtnum+1
            if(i % j == 0) {
                prime = false;     
               // console.log(numbers[i] + isNotPrime)       
                break;             
            }
        }         
        if (prime == null) {   
            console.log(i + isPrime);    
        }                             
    }
}

listPrimeNumber();

//console.log(findPrime(45,2,7));     
//console.log(isPrime2(56));    

//console.log(214);

    


//finding perfenct number