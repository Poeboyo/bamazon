# bamazon

Amazon Clone called "Bamazon" for Legal Reasons...

## How it's Made

- Bamazon is a Command Line Application that is powered by a mySQL Database with purchasable items and also by using user input

- The app connects to a mySQL database, displaying each item in the CLI

```javascript
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
```

- By modularizing my code, it made it simple and concise to read, with verbose function names and processes. Below is the code that the entire app is run off of.

```javascript
//Enables Access to the DataBase
connection.connect(function(err) {
  if (err) throw err;
  showProduct();

  console.log("connected as id " + connection.threadId);

  //Prompts User for Item ID

  inquirer
    .prompt(prompts)
    //Response After Answering Prompt
    .then(answers => {
      orderValidation(answers);
    })
    .catch(catchHandler);
});
```

- Each piece of code serves one function, each only being rendered when needed/called upon.
- User input is taken in using inquirer and has user validation, making sure the "customer" cannot purchase an item that does not exist.
- A small example is below, a small fraction of an "if" statement, making sure that the item is avaiable for purchase.

```javascript
if (stock < 1) {
        console.log(
          "The Item You Are Trying To Purchase is Currently Unavailable :("
        );
```

-Then code is run to allow the user to see their total cost of their purchases (Money doesn't grow on trees)
-Thus ending the transaction

## Technologies Used

- JavaScript
- Node.js
- Inquirer
- MySQL Database

## Difficulties and Learning

-One of the main difficulties with this project was getting the modularized functions to react with one another, at the end of the day, it was a simple matter of a variable change. The other challenge of the project was to create a system to display specified prompts using inquirer, which in the past hadn't agreed with me.
