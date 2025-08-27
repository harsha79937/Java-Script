function sum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
const data=[10,11,15,18];
console.log(sum(data));