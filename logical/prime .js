function prime(num){
    if(num<=1) return false;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0) return false;
    }
    return true;
}
let num=13;
console.log(`${num} is prime?`,prime(num));