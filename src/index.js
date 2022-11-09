const express = require("express");
const app = express();
const morgan = require("morgan");
require("./db.js");
//settings
app.set("port", process.env.PORT || 3000);
app.use(require("../src/routes/index"));

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//inicia el servidor
app.listen(app.get("port"), () => {
  console.log(`Server on Port ${3000}`);
});

//coneion db
