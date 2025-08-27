function getduplicate(arr){
    let duplicate=[];
    let seen=new Set();
    let added=new Set();

    for(let index=0;index<arr.length;index++){
        if (seen.has(arr[index])&&!added.has(arr[index])){
            duplicate.push(arr[index]);
            added.add(arr[index]);
        }else{
            seen.add(arr[index]);
        }
    }return duplicate;
}
const data=[10,11,12,13,14,15,13,15];
console.log(getduplicate(data));

