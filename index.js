// Process Argv : bisa mengambil input dari terminal
// Command : show, add, delete, update

const command = process.argv[2];
const params = process.argv.slice(3);
const TodoController = require("./controller/TodoController");
switch (command) {
  case "show":
    // console.log("command show");
    // const fs = require("fs");
    // let data = fs.readFileSync("./data.json", "utf8");
    // let todos = JSON.parse(data);
    // console.log(TodoController);
    TodoController.show();
    break;
  case "add":
    // console.log("command add");
    TodoController.add(params);
    break;
  case "delete":
    // console.log("command delete");
    TodoController.delete(params);
    break;
  case "update":
    // console.log("command update");
    TodoController.update(params);
    break;
  default:
    // console.log("Masukan command yang benar!");
    TodoController.massage("Masukan command yang benar!");
    break;
}
