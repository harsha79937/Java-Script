function largest(a,b,c){
    if(a>=b&&a>=c){
        console.log(`${a} is largest`);
    }else if(b>=a&&b>=c){
        console.log(`${b} is largest`);
    }else{
        console.log(`${c} is largest`);
    }
}
    largest(99,89,90);