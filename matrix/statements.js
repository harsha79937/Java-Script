let principal=1200;
let time = 12;
let rate=10;
let interest=(principal*rate*time)/100;
console.log("simple interest is:" +interest);



let n1=29;
let n2=30;
let n3=31;
let avg=(n1+n2+n3)/3;
console.log("the average is:"+ avg);



let num1=90;
let num2=87;
let maxNum=(num1>num2)?num1:num2;
console.log("max number is:"+maxNum);



let r=16;
let Pi=3.14;
let area =(Pi*r*r);
console.log("area of circle is:"+area);



var age =17;
if(age>=18){
    console.log("eligible to vote");
}else{
    console.log("not eligible");
}



let x=-5;
if(x>0){
    console.log("x is positive");
}else if(x<0){
    console.log("x is negative");
}else{
    console.log("x is zero");
};



let score=65;
if (score>=90){
    console.log("A grade");
}else if(score >=70){
    console.log("B grade");
}else if(score>=55){
    console.log("C grade");
}else{
    console.log("F grade");
}



let no=25;
if(no%2===0){
    console.log("no is even");
}else{
    console.log("no is odd");
}


let a=15;
let b=4;
let c=10;
if(a>=b&&a>=c){
    console.log("a is large");
}else if(b>=c&&b>=a){
    console.log("b is large");
}else{
    console.log("c is large");
}


let yr=2025;
if(yr%4==0){
    console.log("yr is leap");
}else{
    console.log("yr is not leap");
}


let marks = 65;
let grade;
switch (true) {
    case (marks >= 90):
        grade = "A";
        break;
    case (marks >= 75):
        grade = "B";
        break;
    case (marks >= 60):
        grade = "C";
        break;
    default:
        grade = "F";
}
console.log("Grade: " + grade);


for(let i=1;i<=5;i++){
    console.log(i);
}


let num=8;
for(let i=1;i<=10;i++){
    console.log(num+"*"+i+"="+(num*i));
}



let number=3;
let factorial=1;
for(i=1;i<=number;i++)
    factorial*=i;
console.log("Factorial of " + number + " is " + factorial);

