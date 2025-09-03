function fibonacci(n){
    let n1=0,n2=1,nextterm;
    console.log(n1);
    console.log(n2);
    for(let i=3;i<=n;i++){
        nextterm=n1+n2;
        console.log(nextterm);
        n1=n2;
        n2=nextterm;
    }
}
fibonacci(9);