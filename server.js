const express = require("express");
const res = require("express/lib/response");
const app = express();

app.get('/addTwoNumbers/:firstNumber/:secondNumber', function (req, res, next) {
  var firstNumber = parseInt(req.params.firstNumber)
  var secondNumber = parseInt(req.params.secondNumber)
  var result = firstNumber + secondNumber || null   // Calculate the sum of the two numbers or set result to null if conversion fails
  if (result == null) {
    res.json({ result: result, statusCode: 400 }).status(400)
  }
  else {
    res.json({ result: result, statusCode: 200 }).status(200)
  }
})


const port = 3000;
app.listen(port, () => {
  console.log("hello i'm listening to port " + port);
})