const connection = require("./connection");
const mysql = require("mysql");

function orderValidation(answers) {
  connection.query(
    "SELECT stock_quantity FROM products WHERE item_id = ?",
    [answers.product_id],
    function(err, res) {
      if (err) throw err;

      if (res[0].stock_quantity < 1) {
        console.log(
          "The Item You Are Trying To Purchase is Currently Unavailable :("
        );
        connection.end();
      } else if (res[0].stock_quantity < answers.numberOfPurchases) {
        console.log(
          `Number of Items in Stock is Less than Number of Items Ordered`
        );
        connection.end();
      } else {
        connection.query(
          "UPDATE products SET ? WHERE ?",
          [
            {
              stock_quantity: res[0].stock_quantity - answers.numberOfPurchases
            },
            {
              id: answers[0].product_id
            }
          ],
          function(err, res) {
            if (err) throw err;

            connection.query(
              "SELECT price, stock_quantity FROM products WHERE item_id = ?",
              [answers.item_id],
              function(err, res) {
                if (err) throw err;

                let total = res[0].price * answers.numberOfPurchases;
                addSales(answers.item_id, total);
                console.log(
                  `Order Confirmed, Your Remaining Balance is $${total}`
                );

                connection.end();
              }
            );
          }
        );
      }
    }
  );
}
module.exports = orderValidation;
