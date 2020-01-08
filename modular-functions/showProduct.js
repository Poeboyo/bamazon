let connection = require("./connection");

function showProduct() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    for (let i = 0; i < res.length; i++) {
      console.log(
        `\n\nID: ${res[i].item_id} || Name: ${res[i].product_name} || Price: $${res[i].price}|| Stock: ${res[i].stock_quantity}
        \n +=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=`
      );
    }
  });
}
module.exports = showProduct;
