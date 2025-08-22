let n1=0,n2=1,nextTerm;
let count=10;
console.log(n1);
console.log(n2);

for(i=2;i<count;i++){
    nextTerm=n1+n2;
    console.log(nextTerm);
    n1=n2;
    n2=nextTerm;
}