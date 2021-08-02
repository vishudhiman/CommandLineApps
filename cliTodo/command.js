#!/usr/bin/env node
const program = require("commander");
const { prompt } = require("inquirer");
var Choices = require("prompt-choices");
const { addTodo, removeTodo, listTodos } = require("./index");

var choices = new Choices(["done", "pending"]);

// Todo Questions
const questions = [
  {
    type: "input",
    name: "title",
    message: "Todo Name",
  },
  {
    type: "choices",
    name: "status",
    message: "Todo Status",
    value: choices,
  },
];

program.version("1.0.0").description("Todo App System");

// program
//   .command('add <firstname> <lastname> <phone> <email>')
//   .alias('a')
//   .description('Add a Todo')
//   .action((firstname, lastname, phone, email) => {
//     addTodo({firstname, lastname, phone, email});
//   });

// Add Command
program
  .command("add")
  .alias("a")
  .description("Add a Todo")
  .action(() => {
    prompt(questions).then((answers) => addTodo(answers));
  });

// Remove Command
program
  .command("remove <_id>")
  .alias("del")
  .description("Remove a Todo")
  .action((_id) => removeTodo(_id));

// List Command
program
  .command("list")
  .alias("ls")
  .description("List all Todos")
  .action(() => listTodos());

program.parse(process.argv);
