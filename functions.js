const colors = require("colors");
const asciiTable = require("ascii-table");
module.exports = function (str, con, cb) {
    switch (str) {
        case colors.green("View Products for Sale"):
            getProducts(`SELECT * FROM products`, con, function (res) {
                let table = createTable(res);
                console.clear();
                console.log(table.toString() + "\n\n");
                cb();
            });
            break;
        case colors.green("View Low Inventory"):
            getProducts(`SELECT * FROM products WHERE stock_quantity BETWEEN 0 AND 5`, con, function (res) {
                let table = createTable(res);
                console.clear();
                console.log(table.toString() + "\n\n");
                cb();
            });
            break;
        case colors.green("Add to Inventory"):
                getProducts(`SELECT * FROM products WHERE stock_quantity BETWEEN 0 AND 5`, con, function (res) {
                    let table = createTable(res);
                    console.clear();
                    console.log(table.toString() + "\n\n");
                    cb();
                });
            break;
        case colors.green("Add New Product"):

            break;
        case colors.red("exit"):

            break;
        default:

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