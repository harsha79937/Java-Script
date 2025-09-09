let identity =[
    [1,0,0],
    [0,1,0],
    [0,0,1]
];
let isidentity = true;
for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        if((i===j && identity[i][j]!== 1)|| (i!==j && identity[i][j]!==0))
            isidentity=false;
    }
}
console.log(isidentity);
