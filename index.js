const express = require("express");
const path = require("path");
const ejs = require('ejs');
const hbs = require("express-handlebars");


let app = express();
const port = process.env.Port || 3000;

app.use(express.static(path.join(__dirname ,"dist")));
console.log(path.join(__dirname, "dist"));

app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", hbs({
  extname: "handlebars",
  partialsDir: path.join(__dirname, "/views/partials")


}));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("home");
});


app.listen(port, () => {
  console.log("Server started on port " + port);
})
