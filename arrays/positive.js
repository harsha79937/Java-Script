function positive(arr){
    return arr.every(num=>num>0);
}
console.log(positive([1,2,3]));
console.log(positive([1,-2,-3]));
