function sort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                const temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }return arr;
}
let data=[10,18,17,22,27,3,6];
console.log(sort(data));