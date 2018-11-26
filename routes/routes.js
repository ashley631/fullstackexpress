"use strict";
const express = require("express");
const routes = express.Router();
const pool = require("../connection/pg-connection-pool.js") 
//.js is only used when requiring the module

function getCart (req,res) {
    pool.query("select * from ShoppingCart").then((result)=> {
        res.json(result.rows);
    });
}
cart.get("/cart-items", (req,res)=> {
    pool.query("select * from ShoppingCart").then((result)=> {
     getTable(req,res);
    });
 cart.post("/cart-items", (req,res) => {
     pool.query("insert into ShoppingCart").then((result) => {
         pool.query("select * from ShoppingCart").then((result) => {
             res.json(result.rows);
         });
     });
    cart.put("/cart-items", (req,res) => {
        pool.query("update ShoppingCart").then ((result) => {
            res.json(result.rows);
        });
 
 });
});
});
module.exports = routes;