function* numberGen(){
    yield 1;
    yield 2;
    yield 3;
}
let gen=numberGen();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);