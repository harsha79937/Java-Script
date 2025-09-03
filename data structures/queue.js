class Queue{
    constructor(){
        this.items=[];
    }
    enqueue(element){
        this.items[this.items.length]=element;
    }
    dequeue(){
        if(this.isEmpty()) return "underflow";
         return this.items.shift();
    }
    front(){
        if(this.isEmpty()) return "empty queue";
         return this.items[0];
    }
    size(){
        return this.items.length;
    }
    isEmpty(){
        return this.items.length===0;
    }
    print(){
        let str=" ";
        for(let i=0;i<this.items.length;i++){
            str += this.items[i] + " ";
        }
        console.log(str.trim());
    }
}
let queue= new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log("Front:", queue.front()); 
console.log("Dequeued:", queue.dequeue()); 
console.log("Size:", queue.size()); 
queue.print();