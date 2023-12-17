var expect = require("chai").expect;
var request = require("request");

// Test suite for the "Add Two Numbers" API endpoint
describe("Add Two Numbers", function () {
  var url = "http://localhost:3000/addTwoNumbers/12/13";  // Define the URL for the API endpoint
  it("returns status 200 to check if api works", function (done) {  // Test case: Check if the API returns status 200
    request(url, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done()
    });
  });

  // Test case: Check if the API returns statusCode key in the body and it is equal to 200
  it("returns statusCode key in body to check if api give right result should be 200", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body)       // Parse the response body as JSON
      expect(body.statusCode).to.equal(200);
      done()
    });
  });

  // Test case: Check if the API returns the result as a number
  it("returns the result as number", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body)
      expect(body.result).to.be.a('number');
      done()
    });
  });

  // Test case: Check if the API returns the result equal to (?)
  it("returns the result equal to 25", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body)
      expect(body.result).to.equal(25);
      done()
    });
  });

  // Test case: Check if the API returns the result not equal to 15
  it("returns the result not equal to 15", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.result).to.not.equal(15);
      done()
    });
  });
});

// Test suite for the "Add Two Strings" API endpoint
describe("Add Two strings", function () {
  var url = "http://localhost:3000/addTwoNumbers/a/b";
  it("should return status 200", function (done) {   // Test case: Check if the API returns status 200
    request(url, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done()
    });
  });
  // Test case: Check if the API returns statusCode key in the body and it is equal to 400
  it("returns statusCode key in body to check if api gives right result should be 400", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body)
      expect(body.statusCode).to.equal(400);
      done()
    });
  });

  // Test case: Check if the API returns the result as null
  it("returns the result as null", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body)
      expect(body.result).to.be.a('null');
      done()
    });
  });
});