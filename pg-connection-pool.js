"use strict";


const pg = require("pg");
const url = require("url");
try {
require("dotenv").config();
} catch (e) {
console.log(e);
}
const params = url.parse(process.env.DATABASE_URL);
const auth = params.auth.split(":");
const config = {
user: auth[0],
password: auth[1],
host: params.hostname,
port: params.port,
database: params.pathname.split("/")[1],
ssl: params.hostname !== "localhost"
};
module.exports = new pg.Pool(config);




// const pg=require("pg");
// const pool=require;
// new pg.Pool ({
//     user: "postgres",
//     password: "password",
//     host: "localhost",
//     port: 5432,
//     database: "postgres",
//     ssl : false
// });
// //Remember this ^^^^^
//     cart.get("/cart-items", (req,res)=> {
//        pool.query("select * from ShoppingCart").then((result)=> {
//         res.json(result.rows);
//        });
//     cart.post("/cart-items", (req,res) => {
//         pool.query("insert into ShoppingCart").then((result) => {
//             pool.query("select * from ShoppingCart").then((result) => {
//             res.json(result.rows);
//             });
//         });
//     }); 
//     });
// module.exports = cart;








