function max(arr){
    let max=arr[0];

    for(let index=1;index<arr.length;index++){
        if(arr[index]>max){
            max=arr[index];
        }
    }return max;
}
const data=[10,11,12,13,14,15];
console.log(max(data));