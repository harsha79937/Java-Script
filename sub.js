let mat = [
  [9, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
let sub= mat[0][0];  
for (let i = 0; i < mat.length; i++) {
  for (let j = 0; j < mat[i].length; j++) {
     if (i === 0 && j === 0) continue; 
    sub -= mat[i][j];
  }
}
console.log("Sub of all elements:", sub);
