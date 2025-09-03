function power(x,y){
    let result=1;
    for(i=0;i<y;i++){
        result*=x;
    }
    console.log(`${x} raised to ${y} is ${result}`);
}
power(2,6);