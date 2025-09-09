let mat=[
    [5,0,0],
    [0,5,0],
    [0,0,5]
];
let scalar=mat[0][0];//5
let isscalar=true;
for(let i=0;i<mat.length;i++){           //0,1,2
    for(let j=0;j<mat.length;j++){      //0,1,2
        if((i===j&&mat[i][j]!==scalar)||(i!==j&&mat[i][j]!==0))
            isscalar=false;
    }
}
console.log(isscalar);
