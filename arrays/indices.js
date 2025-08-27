function getelementindices(arr){
    let numarr=[];
    for(let index=0;index<arr.length;index++){
        if (index%2===0){
            numarr.push(arr[index]);
        }
    }return numarr;
}
const data=[10,11,12,13,14];
console.log(getelementindices(data));