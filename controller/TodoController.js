const Todo = require("../model/Todo");
const TodoView = require("../view/TodoView");

class TodoController {
  static show() {
    // console.log("controller show");
    let todos = Todo.show();
    TodoView.show(todos);
  }
  static add(todo) {
    Todo.add(todo);
  }
  static delete(todo) {
    Todo.delete(todo);
  }
  static update(todo) {
    Todo.update(todo);
  }
  static massage(msg) {
    TodoView.massage(msg);
  }
}
module.exports = TodoController;
