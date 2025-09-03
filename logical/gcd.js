function gcd(a,b){
    while(b!=0){
        let x=b;
        b=a%b;
        a=x;
    }
    console.log("gcd is:",a);
}
gcd(22,26);