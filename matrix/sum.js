let matrix=[
    [2,7,8],
    [12,28,19],
    [4,5,6]
];
let sum=0;
for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[i].length;j++){
        sum+=matrix[i][j];
    }
}
console.log("sum=",sum);
