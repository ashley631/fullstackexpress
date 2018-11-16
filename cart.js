"use strict";
const express = require("express");
const cart = express.Router();
const shoppingCarts = [
    {   id: 0,
        product: "Grapes", 
        price: 3,
        quantity: 2
 },

    {
        id: 1,
        product: "Oranges",
        price: 2,
        quantity: 3
    },

    {
        id: 2,
        product: "Apples",
        price: 2,
        quantity: 5
    },

    {
        id:3,
        proudct: "Toothpaste",
        price: 4,
        quantity: 1
    }
]

cart.get("/cart-items", (req, res) => {  
    res.json(shoppingCarts);

});

module.exports = cart;

