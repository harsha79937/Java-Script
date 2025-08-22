function largest(arr){
    let max=[0];
    for(let i=1;i<arr.length;i++){
        if (arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
console.log(largest([3,8,6,19,8]));