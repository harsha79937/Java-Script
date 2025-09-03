function negative(arr){
    return arr.filter(num=>num<=0);
}
let data=[-2,-5,7,8,0];
console.log(negative(data));