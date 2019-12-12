const connection = require("./connection");

orderValidation = connection.query(
  "SELECT stock_quantity FROM products WHERE id = ?",
  [answers.product_id],
  function(err, res) {
    if (err) throw err;

    if (res[0].stock_quantity < 1) {
      console.log(
        "The Item You Are Trying To Purchase is Currently Unavailable :("
      );
      connection.end();
    } else if (res[0].stock_quantity < answer.units_purchased) {
      console.log(
        `Number of Items in Stock is Less than Number of Items Ordered`
      );
      connection.end();
    } else {
      connection.query(
        "UPDATE products SET ? WHERE ?",
        [
          {
            stock_quantity: res[0].stock_quantity - answers.units_purchased
          },
          {
            id: answers.product_id
          }
        ],
        function(err, res) {
          if (err) throw err;

          connection.query(
            "SELECT price, stock_quantity FROM products WHERE id = ?",
            [answers.product_id],
            function(err, res) {
              if (err) throw err;

              let total = res[0].price * answers.units_purchased;
              addSales(answers.product_id, total);
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
