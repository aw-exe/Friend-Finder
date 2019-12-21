const path = require("path");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

//ROUTES

//WAHT THE USER PUTS IN THEIR BROWSER -> WHAT WILL IT GO TO, WHAT DATA WILL THEY SEE.
app.get("/survey", function (req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());


require("./app/routing/htmlRoutes")(app);
// require("/apiRoutes")(app);

app.listen(PORT, () =>
  console.log(`The server is listening on port ${PORT}!`));