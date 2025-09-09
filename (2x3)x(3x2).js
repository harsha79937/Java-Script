let m1=[
    [3,4,5],
    [6,7,8]
];
let m2=[
    [1,2],
    [3,4],
    [5,6]
];
let m3=[];
for(let i=0;i<m1.length;i++){    
    m3[i]=[];
    for(let j=0;j<m2[0].length;j++){
        m3[i][j]=0;
        for(let k=0;k<m1[0].length;k++){
            m3[i][j]+=m1[i][k]*m2[k][j];      
        }
    }
}
       