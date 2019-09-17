const mysql = require("mysql");
const asciiTable = require("ascii-table");
const inquirer = require("inquirer");
const colors = require("colors");
let choices = [
    colors.green("View Products for Sale"),
    colors.green("View Low Inventory"),
    colors.green("Add to Inventory"),
    colors.green("Add New Product"),
    colors.red("exit")
]

const functions = require("./functions.js");

function askQuestions(cb){
    inquirer.prompt([
        {
            type:"list",
            name: "id",
            message: "Main Menu:\n------------",
            choices: choices
        }
    ]).then(function(answers) {
        console.clear();
        functions(answers.id, con, function(){
            askQuestions();
        })
    })
}


let con = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "root",
    database: "bamazon"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + con.threadId);
    askQuestions();
});