const express = require("express");
const app = express();
require("./db");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  console.log("Hello");
  res.send("Hello");
});

const student = require("./router/student");

app.use("/student/v1/api", student);

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
