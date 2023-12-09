/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  list = [];

  add(item) {
    this.list.push(item)
  }
  remove(indexOfTodo){
    if(indexOfTodo < this.list.length){
      this.list.splice(indexOfTodo,1);
    }
    
  }
  update(index, updatedTodo){
    if(index < this.list.length){
      this.list.splice(index,1,updatedTodo);
    }
    
  }

  getAll() {
    return this.list;
  }
  get(indexOfTodo) {
    if(indexOfTodo < this.list.length){
      return this.list[indexOfTodo];
    }else{
      return null;
    }
  }
  clear() {
    return this.list=[];
  }
}

module.exports = Todo;
