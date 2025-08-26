function calculate(a,b,operation){
    return operation(a,b);
}
console.log(calculate(10,9,(x,y)=>(x+y)));
console.log(calculate(12,18,(x,y)=>(x-y)));
console.log(calculate(2,17,(x,y)=>(x/y)));