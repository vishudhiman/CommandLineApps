const mongoose = require("mongoose");

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;
// Connect to db
const db = mongoose.connect("mongodb://localhost:27017/todocli", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Import model
const Todo = require("./models/todo");

// Add Todo
const addTodo = (todo) => {
  Todo.create(todo).then((todo) => {
    console.info("New Todo Added");
  });
};
// Remove Todo
const removeTodo = (_id) => {
  Todo.remove({ _id }).then((todo) => {
    console.info("Todo Removed");
  });
};

// List Todos
const listTodos = () => {
  Todo.find().then((todos) => {
    console.info(todos);
    console.info(`Total ${todos.length} Todos`);
  });
};

// Export All Methods
module.exports = {
  addTodo,
  removeTodo,
  listTodos,
};
