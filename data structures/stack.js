class Stack{
    constructor(){
        this.items=[];
    }
    push(element){
        this.items[this.items.length]=element;
    }
    pop(){
        if(this.isEmpty()){
            return "underflow";
        }
        let top=this.items[this.items.length-1];
        this.items.length=this.items.length-1;
        return top;
    }
    peek(){
        if(this.isEmpty()) return"empty stack";
        return this.items[this.items.length-1];
    }
    size(){
        return this.items.length;
    }
    isEmpty(){
        return this.items.length===0;
    }
     
    print() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    console.log(str.trim());
  }
}
const stack=new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log("top:",stack.peek());
console.log("popped:",stack.pop());
console.log("size:",stack.size());
stack.print();