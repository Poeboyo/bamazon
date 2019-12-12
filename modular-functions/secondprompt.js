const inquirer = require("inquirer");

function userAction() {
  inquirer
    .prompt({
      type: "input",
      name: "customer_num",
      message: "How Many would you like to Purchase?"
      //Get User Input for Item ID
    })
    .then(answers => {
      console.log(answers.customer_id);
    });
}

module.exports = userAction;
