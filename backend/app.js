const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const authRouter = require("./routes/auth");
const articleRouter = require("./routes/article");
const productRouter = require("./routes/product");

//Midleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//
//router midleware
app.use("/api/user", authRouter);
app.use("/api", articleRouter);
app.use("/api", productRouter);
//
//
//connect db
mongoose.connect(process.env.DB_CONNECTION);
let db = mongoose.connection;
db.on("error", console.error.bind(console, "Database ga konek"));
db.once("open", () => {
  console.log("database konek");
});

//listening port
app.listen(process.env.port, () => {
  console.log("Server jalan");
});
