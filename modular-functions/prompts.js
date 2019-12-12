const prompts = [
  {
    type: "input",
    name: "product_id",
    message: "Please Input the ID Number of the Item you wish to purchase?",
    validate: function(input) {
      if (!isNaN(input)) {
        if (input > 0 && input <= products) {
          return true;
        }
      }
      return "Please enter a valid ID";
    }
  },
  {
    type: "input",
    name: "numberOfPurchases",
    message: "How many units of this product would you like to buy?",
    validate: function(input) {
      if (!isNaN(input) && input > 0) {
        return true;
      }
      return "Please enter a Number";
    }
  }
];
module.exports = prompts;
