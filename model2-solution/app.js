(function () {

'use strict';
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var list1 = this;
  list1.items = ShoppingListCheckOffService.gettoBuyItems();
  list1.remove = function (itemIndex) {
     ShoppingListCheckOffService.addDelete(itemIndex);
  };
}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var list2 = this;
  list2.items = ShoppingListCheckOffService.getboughtItems();
}

function ShoppingListCheckOffService() {
var service = this;
var bought = [];

var toBuy=[{ name: "Cookies",
             quantity: 10 },
           { name: "Cokes",
             quantity: 20 },
           { name: "Pizzas",
             quantity: 5 },
           { name: "Cakes",
              quantity: 4 },
          { name: "Bagels",
            quantity: 10 }];

  service.addItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      bought.push(item);
  };

  service.getItem = function (index) {
      return toBuy[index];
  };

 service.addDelete = function (itemIdex) {
  var item = toBuy[itemIdex];
  service.addItem(item.name, item.quantity);
  toBuy.splice(itemIdex, 1);

 };

 service.gettoBuyItems = function(){
     return toBuy;
 };
 service.getboughtItems = function(){
   return bought;
 }
}
})();
