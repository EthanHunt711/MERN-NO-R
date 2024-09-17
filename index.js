const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//ROUTES
app.use("/api/products", productRoute);

mongoose
  .connect(
    "mongodb+srv://aliesmaeeli:ZpbvcukJlrzLN6Jn@mern-no-r.pwxfu.mongodb.net/Node-API?retryWrites=true&w=majority&appName=MERN-NO-R"
  )
  .then(() => {
    console.log("Connected to DB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
