//Brings in the Inquirer Prompt Package
const inquirer = require("inquirer");
//Brings in the mySQL Package
const mysql = require("mysql");
//Prompts the Customer with a choice of purchase
const userAction = require("./modular-functions/secondprompt");
//Connected to Bamazon DataBase
const connection = require("./modular-functions/connection");
//Makes Connection from Separate File for less File Pollution
connection;
//Enables Access to the DataBase
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  //Prompts User for Item ID
  inquirer
    .prompt(
      (initialPrompt = {
        type: "input",
        name: "customer_id", //Response Collected
        message: "Please Input the item ID you wish to purchase?"
      })
    )
    //Response After Answering Prompt
    .then(answers => {
      userAction();
    });
});
