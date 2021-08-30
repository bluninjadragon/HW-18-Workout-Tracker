//dependencies
const express = require("express");
const mongoose = require("mongoose");
require("dotenv");
//port
const PORT = process.env.PORT || 27017;

//express apps
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  //use unify topology
  useUnifiedTopology: true,
});

//routes

app.use(require("./routes/api.js"));
app.use(require("./routes/views.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
