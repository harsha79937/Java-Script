function getzeros(arr){
    let count=0;
    for(let index=0;index<arr.length;index++){
        if(arr[index]===0){
            count++;
        }
    }return count;
}
let data=[10,2,5,8,0,18,9,0,7,88,0,0,];
console.log(getzeros(data));