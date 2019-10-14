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
  description: String,
  url: String
});

var Project = mongoose.model("Project", projectSchema);

const saveProjectToDb = (title, description, url) => {
  var newProject = new Project({ title, description, url });

  newProject.save(function(err) {
    if (err) return console.error(err);
    console.log("Project Saved");
  });
};

const findAll = () => {
  Project.find((err, data) => {
    err ? console.log(err) : console.log(data);
  });
};

const findProject = title => {
  Project.find({ title })
    .then(response => {
      response[0] === undefined
        ? console.log("Project " + title + " not found")
        : console.log(response);
    })
    .catch(err => {
      {
        console.log("check for error == " + err);
      }
    });
};

const deleteProject = title => {
  Project.deleteOne({ title }).catch(err => {
    console.log("error deleting the Project " + err);
  });
  console.log("Project " + title + " has been deleted");
};

setTimeout(() => {
  findAll();
}, 4000);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Server running on port ${port}!`));
