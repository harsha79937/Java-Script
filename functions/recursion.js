function num(n){
    if(n===0) return;
    num(n-1);
    console.log(n);
}
num(15);