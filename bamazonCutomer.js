//Brings in the Inquirer Prompt Package
const inquirer = require("inquirer");
//Connected to Bamazon DataBase
const connection = require("./modular-functions/connection");
//UserAction
const prompts = require("./modular-functions/prompts");
//Displays Avaibale Items for Sale
const showProduct = require("./modular-functions/showProduct");
//Order Validation
const orderValidation = require("./modular-functions/orderValidation");
//Catch
function catchHandler(error) {
  console.error(error);
}

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
      console.log(answers);

      orderValidation(answers);
    })
    .catch(catchHandler);
});
