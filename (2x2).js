let m1 = [
    [2, 3],
    [9, 8]
];
let m2 = [
    [4, 8],
    [9, 6]
];
let m3 = [];    
for (let i = 0; i < m1.length; i++) {
    m3[i] = []; 
    for (let j = 0; j < m2[0].length; j++) {
        m3[i][j] = 0;
        for (let k = 0; k < m1[0].length; k++) {
            m3[i][j] += m1[i][k] * m2[k][j];
        }
    }
}

console.log("Multiplication is:", m3);
