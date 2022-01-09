// modules
const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");
const config = require("../config");

//important
const domain = config.domain;

// configuration
app.engine("html", ejs.render)
app.set("view engine", "html")
app.set("views", path.join(__dirname, "./pathways"))
app.use(express.static(path.join(__dirname, "./public")));

// pages
app.get("/", (req, res) => {
  res.render("index.ejs")
})
app.get("/view", (req, res) => {
    res.render("view.ejs")
})
app.get("/contact", (req, res) => {
    res.render("contact.ejs")
})
app.get("/support", (req, res) => {
    res.render("support.ejs")
})
app.get("/team", (req, res) => {
    res.render("team.ejs")
})
app.get("/invite", (req, res) => {
    res.render("invite.ejs")
})
app.get("/generator", (req, res) => {
    res.render("generator.ejs")
})
app.get("/faq", (req, res) => {
    res.render("faq.ejs")
})
app.get("/feature", (req, res) => {
    res.render("features.ejs")
})
app.get("/policy", (req, res) => {
    res.render("pap.ejs")
})
// 404 get
app.get("*", (req, res) => {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;



  if (fullUrl == domain || fullUrl == `${domain}/style.css` || fullUrl == `${domain}/style.css` || fullUrl == `${domain}/favico.ico` ) {

    renderTemplate(res, req, "index.ejs");


  } else {

    res.render("404.ejs");
  }
});
// listener
const http = require("http").createServer(app);
http.listen(process.env.PORT, () => {
  console.log(`🔃 - Dashboard listening in ${process.env.PORT} port`)
  setTimeout(() => {
    console.log(`✅ - Successfuly deploy the Dashboard for https://animequotes.tk`)
  }, 3000)
  
})