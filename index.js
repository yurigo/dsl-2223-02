const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/multiplicacion", function (req, res) {
  //req.query
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);

  //req.params
  res.json({ resultado: num1 * num2 });
});

app.get("/suma", function (req, res) {
  //req.query
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);

  //req.params
  res.json({ resultado: num1 + num2 });
});

app.get("/operaciones/resta/:x/:y", function (req, res) {
  //req.query
  //req.params
  const num1 = parseInt(req.params.x);
  const num2 = parseInt(req.params.y);

  res.json({ resultado: num1 - num2 });
});

app.listen(3000, () => {
  console.log("http://127.0.0.1:3000");
});
