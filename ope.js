let a = 10;
let b = 5;
console.log("Addition:", a + b);         
console.log("Subtraction:", a - b);      
console.log("Multiplication:", a * b);    
console.log("Division:", a / b);           
console.log("Modulo (Remainder):", a % b); 



let x = 10;
let y = "10";
console.log("== :", x == y);    
console.log("!= :", x != y);    
console.log("=== :", x === y);  
console.log("!== :", x !== y);  
let c = 8;
let d = 5;
console.log("> :", c> d);      
console.log("< :", c < d);      
console.log(">= :", c >= d);    
console.log("<= :", c <= d);   



let hasPermission = true;
let isLoggedIn = false;
console.log("AND (&&):", hasPermission && isLoggedIn); 
console.log("OR (||):", hasPermission || isLoggedIn);  
console.log("NOT (!):", !hasPermission);              



let m= 10; 
let n = 5;  
console.log("AND (&):", m & n);     
console.log("OR (|):", m | n);      
console.log("XOR (^):", m ^ n);     
console.log("Left Shift (<<):", m << 1); 
console.log("Right Shift (>>):", m >> 1);



let z = 10;
z += 5;  
console.log("x += 5:", x);
z -= 3;  
console.log("x -= 3:", x);
z *= 2;  
console.log("x *= 2:", x);
z /= 4;
console.log("x /= 4:", x);
z %= 4;  
console.log("x %= 4:", x); 



let age = 17;
let result = (age >= 18) ? "Eligible to vote" : "Not eligible";
console.log(result); 




let num = 42;
let str = "Hello";
let isActive = true;
console.log(typeof num);     
console.log(typeof str);     
console.log(typeof isActive); 
console.log(typeof null);     
console.log(typeof undefined); 



let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName);
let greet = "Hello " + firstName + "!";
console.log(greet); 