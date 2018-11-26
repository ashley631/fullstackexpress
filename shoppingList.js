"use strict";

const shoppingList = {
    template: `
    <button ng-click="$ctrl.getAllItems();">Get Items</button>
    <ul>
        <li ng-repeat="obj in $ctrl.">{{ obj.text }}</li>
    </ul>
    


    `,
    controller: ["CartService", function(CartService){
        const vm=this;
        vm.getAllItems = () => {
            CartService.getAllItems().then((response) => {
                console.log(response);
                vm.cart = response.data;
            });
        };
        vm.deleteItems = () => {
            CartService.deleteItems().then((response) => {
                
            })
        }
    }]
};

angular
    .module("ShoppingCart")
    .component("shoppingList", shoppingList);