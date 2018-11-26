"use strict";
const express=require("require");
const routes=express.Router(); 

function CartService($http) {
    const self=this;

    self.getAllItems=()=> {
        return $http ({
             url: "/cart-items",
             method: "GET"
        });
    };
    
    self.deleteItems=(id)=> {
        return $http({
            url: `/cart-items/${id}`,
            method: "DELETE"
        });
    };

    self.updateItems=(editedCart)=> {
        return $http({
            url: `/cart-items/${editedCart.id}`,
            method: "PUT",
            data: editedCart
        });
    };
    self.postCart =(newItem) => {
        return $http({
            url: "/cart-items",
            method: "POST",
            data: newCart
        });
    };
}
angular
    .module("ShoppingCart")
    .service("CartService", CartService);