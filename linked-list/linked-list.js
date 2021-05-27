//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function LinkedList(){
    this.last = null;
    this.first = null;
    this.nodeCount = 0;
  };
  
  var Node = function(init){
    this.value = init;
    this.previous = null;
    this.next = null;
  
    this.setValue = function(newValue){
      this.value = newValue;
    };
  
    this.pop = function(){
      this.next = null;
    }
  };
  
  LinkedList.prototype.push = function(value){
    var newNode = new Node(value);
    if(!this.last && !this.first){
      this.last = newNode;
      this.first = newNode;
    }else{
      newNode.previous = this.last;
      this.last.next = newNode;
      this.last = newNode;
    }
    this.nodeCount ++;
  };
  
  LinkedList.prototype.pop = function(){
    var value = this.last.value;
    if(!this.last.previous)
      this.last = null;
    else{
      this.last = this.last.previous;
      this.last.next = null;
    }
    this.nodeCount--;
    return value;
  };
  
  LinkedList.prototype.shift = function(){
    var value = this.first.value;
    if(!this.first.next)
      this.first = null;
    else{
      this.first = this.first.next;
      this.first.previous = null;
    }
    this.nodeCount--;
    return value;
  };
  
  LinkedList.prototype.unshift = function(value){
    var newNode = new Node(value);
    if(!this.last && !this.first){
      this.last = newNode;
      this.first = newNode;
    }else{
      newNode.next = this.first;
      this.first.previous = newNode;
      this.first = newNode;
    }
    this.nodeCount++;
  };
  
  LinkedList.prototype.count = function(){
    return this.nodeCount;
  }
  
  LinkedList.prototype.delete = function(value){
    var current = this.first;
    for(var i = 0; i < this.nodeCount; i++){
      if(current.value === value){
        if(current.previous)
          current.previous.next = current.next;
        if(!current.previous)
          this.first = current.next;
        if(current.next)
          current.next.previous = current.previous;
        if(!current.next)
          this.last = current.previous;
        this.nodeCount--;
      }
      current = current.next;
      i++;
    }
  }
  module.exports = LinkedList;
  
  /*var test = new LinkedList();
  test.push(10);
  test.push(5);
  test.push(7);
  test.delete(10);
  console.log(test.shift());*/
  