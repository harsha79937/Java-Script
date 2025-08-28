function mands(arr1,arr2){
    return[...arr1,...arr2].sort((a,b)=>b-a);
}
let data1=[10,11,12];
let data2=[14,15,16];
console.log(mands(data1,data2));