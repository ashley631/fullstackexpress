"use strict";
const express = require("express");
const app = express();
const cart = require("./cart.js");
app.use(express.static("./public"))
app.use(express.json());
app.use("/", cart);
const port = process.env.PORT|| 3000;
app.listen(port, ()=> {
console.log(`Server is running on PORT: ${port}`);
});


// const http = require("http");
// http.createServer((request, response) => {
// response.writeHead(200, {"Content-type": "text/plain"});
// response.write("");
// response.end();
// }).listen(5000);





