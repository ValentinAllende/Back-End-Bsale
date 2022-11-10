const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
require("./db.js");
//settings
app.set("port", process.env.PORT || 3000);
app.use(require("../src/routes/index"));

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Cors Habilitacion/Permiso a mi LocalHost
//app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
//inicia el servidor
app.listen(app.get("port"), () => {
  console.log(`Server on Port ${3000}`);
});
