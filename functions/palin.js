function palin(str){
    const reversed=str.split('').reverse().join('');
    return str===reversed;
}
console.log(palin("madam"));
console.log(palin("harsha"));