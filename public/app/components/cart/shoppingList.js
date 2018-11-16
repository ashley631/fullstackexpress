"use strict";

const shoppingList = {
    template: `


    `,
    controller: ["CartService", function(CartService){
        const vm=this;
        vm.getAllItems = () => {
            CartService.getAllItems().then((response) => {
                console.log(response);
                vm.cart = response.data;
            });
        };
    }]
};

angular
    .module("ShoppingCart")
    .component("shoppingList", shoppingList);