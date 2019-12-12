//Brings in the Inquirer Prompt Package
const inquirer = require("inquirer");
//Brings in the mySQL Package
const mysql = require("mysql");
//Displays Avaibale Items for Sale
const showProduct = require("./modular-functions/showProduct");
//Prompts the Customer with a choice of purchase
const userAction = require("./modular-functions/secondprompt");
//Connected to Bamazon DataBase
const connection = require("./modular-functions/connection");

//Enables Access to the DataBase
connection.connect(function(err) {
  showProduct();

  if (err) throw err;
  console.log("connected as id " + connection.threadId);

  //Prompts User for Item ID
  async inquirer
    .prompt({
      type: "input",
      name: "customer_id", //Response Collected
      message: "Please Input the item ID you wish to purchase?"
    })
    //Response After Answering Prompt
    .then(answers => {
      userAction();
    });
});
