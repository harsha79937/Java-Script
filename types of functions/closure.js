function mycounter(){
    let counter=0;
    return function (){
    counter++;
    return counter;
}
}
let add= mycounter();
console.log(add());
console.log(add());
console.log(add()); //