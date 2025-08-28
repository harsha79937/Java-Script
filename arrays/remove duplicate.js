function removeduplicate(arr){
    return[...new Set(arr)];
}
let data=[10,11,12,11,12,13,15,14,10];
console.log(removeduplicate(data));