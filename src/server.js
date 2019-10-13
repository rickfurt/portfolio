const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();
var mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("database connected");
});

var Schema = mongoose.Schema;

var projectSchema = new mongoose.Schema({
    title: String,
    description:  String,
    url: String
  });

var Project = mongoose.model('Project', projectSchema);

function saveProjectToDb(title, description, url){
    var newProject = new Project({title,description,url});
    
    newProject.save(function (err) {
      if (err) return console.error(err);
      console.log('Project Saved');
    });
  }

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Server running on port ${port}!`));
