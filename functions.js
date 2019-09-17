const colors = require("colors");
const asciiTable = require("ascii-table");
const inquirer = require("inquirer");

//function that takes a sting, mysql connection, and a callback function
module.exports = function (str, con, cb) {
    //run a given string through a switch case
    switch (str) {
        case colors.green("View Products for Sale"):
            //if the user chose "View Products for Sale" from the main menu we query the database to get all of the products from the DB
            getProducts(`SELECT * FROM products`, con, function (res) {
                //after we have gotten the data we create a table for the data so it looks nice, we are clearing the terminal
                let table = createTable(res);
                console.clear();
                //log the table to the terminal to show the products that we currently have, run the passed in callback function
                console.log(table.toString() + "\n\n");
                cb();
            });
            break;
        case colors.green("View Low Inventory"):
            //if the "View Low Inventory" from the main menu we query 
            getProducts(`SELECT * FROM products WHERE stock_quantity BETWEEN 0 AND 5`, con, function (res) {
                let table = createTable(res);
                console.clear();
                console.log(table.toString() + "\n\n");
                cb();
            });
            break;
        case colors.green("Add to Inventory"):
            getProducts(`SELECT * FROM products`, con, function (res) {
                let table = createTable(res);
                console.clear();
                console.log(table.toString() + "\n\n");
                inquirer.prompt([{
                    name: "id",
                    message: "What is the id of the product you would like to update?\n"
                }, {
                    name: "count",
                    message: "how much would you like to add to the inventory?\n"
                }]).then(function (answers) {
                    getProducts(`UPDATE products SET stock_quantity= stock_quantity + ${parseInt(answers.count)} WHERE id=${answers.id}`, con, function (resolve) {
                        getProducts(`SELECT * FROM products`, con, function (res) {
                            let table = createTable(res);
                            console.clear();
                            console.log(table.toString() + "\n\n");
                            cb();
                        });
                    })
                })
            });
            break;
        case colors.green("Add New Product"):
            inquirer.prompt([{
                name: "name",
                message: "What is the name of the new item? :",
                validate: function(name){
                    return name !== "";
                }
            }, {
                name: "department",
                message: "what is the department this item belongs to? :",
                validate: function(name){
                    return name !== "";
                }
            }, {
                name: "price",
                message: "what is the sale price? :",
                validate: function(name){
                    return name !== "";
                }
            }, {
                name: "quantity",
                message: "how many of this item do we have in stock? :",
                validate: function(name){
                    return name !== "";
                }
            }]).then(function (answers) {
                getProducts(`
                    INSERT INTO products (product_name, department_name, price, stock_quantity)
                    VALUES ("${answers.name}", "${answers.department}", ${+answers.price}, ${+answers.quantity});
                `, con, function (resolve) {
                    getProducts(`SELECT * FROM products`, con, function (res) {
                        let table = createTable(res);
                        console.clear();
                        console.log(table.toString() + "\n\n");
                        cb();
                    });
                })
            })
            break;
        case colors.red("exit"):
            con.end();
            process.exit();
            break;
    }
}



function getProducts(queryString, con, cb) {
    con.query(queryString, function (err, res) {
        if (err) throw err;
        cb(res)
    })
}

function createTable(res) {
    let table = new asciiTable("Products")
    table.setHeading("id", "product", "department", "price", "quantity")
    res.forEach(item => {
        let {
            id,
            product_name,
            department_name,
            price,
            stock_quantity
        } = item
        table.addRow(id, product_name, department_name, price, stock_quantity)
    });
    return table;
}