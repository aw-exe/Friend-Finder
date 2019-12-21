// Setting HTML routes for user  

const path = require('path');

module.exports =  function (app){

// GET ROUTE FOR APP 
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });
// POST ROUTE FOR SURVEY ANSWERS
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
}