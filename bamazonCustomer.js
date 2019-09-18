const mysql = require("mysql");
const asciiTable = require("ascii-table");
const inquirer = require("inquirer");
const SqlString = require('sqlstring');

const createTable = require("./functions.js").createTable;
const getProducts = require("./functions.js").getProducts;

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
    afterCon();
});

function afterCon(){
    getProducts(`SELECT * FROM products`, con, function(res){
        let table = createTable(res);
        console.clear();
        console.log(table.toString()+"\n")
        askQuestions(function(answers){
           let item = res.filter(thing => parseInt(thing.id) === parseInt(answers.id));
            if (!item[0]) {
                con.end();
                return console.log("incorrect item id given: no product found!")
            }
            if (parseInt(answers.quantity) > parseInt(item[0].stock_quantity) || parseInt(answers.quantity) <= 0){
                con.end();
                return console.log("Insufficient quantity!\nOrder Canceled")
            }
            let totalPrice = item[0].price * parseInt(answers.quantity);
            getProducts(`UPDATE products SET stock_quantity=${ parseInt(item[0].stock_quantity) - parseInt(answers.quantity)} WHERE id=${item[0].id}`, con, function(resolve){
                getProducts(`SELECT * FROM products`, con, function (res) {
                    let table = createTable(res);
                    console.clear();
                    console.log(table.toString()+"\n"+`Your Total is: ${totalPrice}`)
                    con.end();
                });
            })
        })
    })
}

function askQuestions(cb){
    inquirer.prompt([
        {
            name: "id",
            message: "What is the ID of the product you would like to buy?\n",
            validate: function(name){
                return name !== "";
            }
        },
        {
            name: "quantity",
            message: "how many would like to buy?\n",
            validate: function(name){
                return name !== "";
            }
        }
    ]).then(function(answers) {
     cb(answers)
    })
}