"use strict";
const pg=require("pg");
const pool=require;
new pg.Pool ({
    user: "postgres",
    password: "password",
    host: "localhost",
    port: 5432,
    database: "postgres",
    ssl : false
});
//Remember this ^^^^^
    cart.get("/cart-items", (req,res)=> {
       pool.query("select * from ShoppingCart").then((result)=> {
        res.json(result.rows);
       });
    cart.post("/cart-items", (req,res) => {
        pool.query("insert into ShoppingCart").then((result) => {
            pool.query("select * from ShoppingCart").then((result) => {
            res.json(result.rows);
            });
        });
    }); 
    });
module.exports = cart;








