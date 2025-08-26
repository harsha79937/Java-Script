function even(arr){
    const evenNumber=[];
    for (let index=0;index<arr.length;index++){
        if (arr[index]%2===0){
            evenNumber.push(arr[index]);
        }
    }return evenNumber;
}
const data=[12,17,19,22,20];
console.log(even(data));