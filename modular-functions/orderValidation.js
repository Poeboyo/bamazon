const connection = require("./connection");

function orderValidation(answers) {
  connection.query(
    "SELECT stock_quantity FROM products WHERE item_id = ?",
    [answers.item_id],

    function(err, res) {
      if (err) throw err;
      let stock;
      if (res[0]) {
        stock = res[0].stock_quantity;
      }

      if (stock < 1) {
        console.log(
          "The Item You Are Trying To Purchase is Currently Unavailable :("
        );
        connection.end();
      } else if (stock < answers.numberOfPurchases) {
        console.log(
          `Number of Items in Stock is Less than Number of Items Ordered`
        );
        connection.end();
      } else {
        connection.query(
          "UPDATE products SET ? WHERE ?",
          [
            {
              stock_quantity: stock - answers.numberOfPurchases
            },
            {
              item_id: answers.item_id.toString()
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
