const express = require("express");
const router = express.Router();
const Project = require("../models/project");
const Contact = require("../models/contact");

//accueil

router.get("/", function(req, res) {
  Project.find(function(err, schema) {
    res.render("index", { tutu: schema });
  });
});

//contact

router.get("/contact", function(req, res) {
  Contact.find(function(err, schema) {
    res.render("contact", { contacts: schema });
  });
});

// welcome page

router.get("/auth", (req, res) => res.render("welcome"));

//projects

router.get("/projets", function(req, res) {
  Project.find(function(err, schema) {
    res.render("projets", { tutu: schema });
  });
});

// about me

router.get("/aboutme", function(req, res) {
  res.render("aboutme");
});

module.exports = router;
