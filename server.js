const path = require ("path");
const express = require ("express");

//ROUTES

//WAHT THE USER PUTS IN THEIR BROWSER -> WHAT WILL IT GO TO, WHAT DATA WILL THEY SEE.
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });
  public/survey.html
www.google.com/


