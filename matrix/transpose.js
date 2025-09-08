let matrix= [
  [9,2],
  [4,5],
  [8,9]
];
let r=matrix.length;
let c=matrix[0].length;
let transpose=[];
for(let i=0;i<c;i++){
    transpose[i]=[];
    for(let j=0;j<r;j++)
        transpose[i][j]=matrix[j][i];
}
console.log("original matrix=",matrix);
console.log("transpose=",transpose);
