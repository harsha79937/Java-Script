function mycounter(){
    let counter=0;
    return function (){
    counter++;
    return counter;
};
}
let add= mycounter();
add();
add();
console.log(add());