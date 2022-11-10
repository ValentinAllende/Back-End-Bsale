const mysql = require("mysql");
const product = [];
const category = [];
//Me conecto a la base de Datos
const conexion = mysql.createPool({
  host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
  user: "bsale_test",
  password: "bsale_test",
  database: "bsale_test",
});

conexion.getConnection(function (error, connection) {
  if (error) {
    throw error;
  } else {
    console.log("CONECTADO");
  }
  //me traigo la tabla Product
  connection.query("SELECT * from product", function (error, results) {
    if (error) throw error;

    let string = JSON.stringify(results);
    let json = JSON.parse(string);

    product.push(json);
  });
  //me traigo la tabla Category
  connection.query("SELECT * from category", function (error, results) {
    if (error) throw error;
    let string = JSON.stringify(results);

    let json = JSON.parse(string);

    category.push(json);
  });

  connection.release();
});

module.exports = {
  product,
  category,
};
