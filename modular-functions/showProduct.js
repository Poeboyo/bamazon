let connection = require("./connection");

function showProduct() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(`
    ██████╗░░█████╗░███╗░░░███╗░█████╗░███████╗░█████╗░███╗░░██╗
    ██╔══██╗██╔══██╗████╗░████║██╔══██╗╚════██║██╔══██╗████╗░██║
    ██████╦╝███████║██╔████╔██║███████║░░███╔═╝██║░░██║██╔██╗██║
    ██╔══██╗██╔══██║██║╚██╔╝██║██╔══██║██╔══╝░░██║░░██║██║╚████║
    ██████╦╝██║░░██║██║░╚═╝░██║██║░░██║███████╗╚█████╔╝██║░╚███║
    ╚═════╝░╚═╝░░╚═╝╚═╝░░░░░╚═╝╚═╝░░╚═╝╚══════╝░╚════╝░╚═╝░░╚══╝`);
    console.log(`What's In Stock?`);
    for (let i = 0; i < res.length; i++) {
      console.log(
        `ID: ${res[i].item_id} || Name: ${res[i].product_name} || Price: $${res[i].price}
        \n +=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=`
      );
    }
  });
}

module.exports = showProduct;
