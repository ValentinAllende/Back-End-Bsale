const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes/index");
require("./db.js");
//settings
app.set("port", 3000);

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Cors Habilitacion/Permiso a mi LocalHost
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
app.use("/", routes);
//inicia el servidor
app.listen(process.env.PORT || app.get("port"), () => {
  console.log(`Server on Port ${3000}`);
});
