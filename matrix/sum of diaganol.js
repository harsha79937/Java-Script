let matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
let D1=0;
let D2=0;
for(let i=0;i<matrix.length;i++){   //0,1,2 
    D1+=matrix[i][i];        //[0][0]+[1][1]+[2][2]
    D2+=matrix[i][2-i];     //[0][2]+[1][1]+[2][0]
}
console.log("Sum of D1:",D1);
console.log("Sum of D2:",D2);

