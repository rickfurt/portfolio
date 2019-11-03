const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
require("dotenv").config();
var mongoose = require("mongoose");

/*eslint no-console: ["error", { allow: ["warn", "error"] }] */

app.use(cors());

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("database connected");
});

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

app.get("/projects", (req, res) => {
  Project.find((err, data) => {
    if (err) {
      res.send("Error loading the projects - error" + err);
    } else {
      res.send(data);
    }
  });
});

app.post("/create", (req, res) => {
  let title = req.query.title;
  let description = req.query.description;
  let url = req.query.url;

  saveProjectToDb(title, description, url);
  res.send("something");
});

app.post("/delete", (req, res) => {
  let title = req.query.title;

  deleteProject(title);
  res.send("Deleted");
});

app.listen(port, () => console.log(`Server running on port ${port}!`));
