function secondlargest(arr){
    let sorted=[...new Set(arr)].sort((a,b)=>b-a);
    return sorted[1]||null;
}
let data=[12,67,78,16,81];
console.log(secondlargest(data));