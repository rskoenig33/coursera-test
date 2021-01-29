(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('AlreadyBoughtController', AlreadyBoughtController)
.controller('ToBuyController', ToBuyController)
.service('ShoppingListCheckoffService', ShoppingListCheckoffService);



ToBuyController.$inject = ['ShoppingListCheckoffService'];
function ToBuyController(ShoppingListCheckoffService) {
  var tobuy = this;

  tobuy.buyitems = ShoppingListCheckoffService.getBuyItems();

  tobuy.buyItem = function (itemIndex) {
    ShoppingListCheckoffService.buyItem(itemIndex);
  };
}



AlreadyBoughtController.$inject = ['ShoppingListCheckoffService'];
function AlreadyBoughtController(ShoppingListCheckoffService) {
  var bought = this;

  bought.boughtitems = ShoppingListCheckoffService.getBoughtItems();

}


function ShoppingListCheckoffService() {
  var service = this;

  // List of shopping items
  
  var buyitems = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "Steak",
    quantity: "6"
  }
];

var boughtitems = [];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };

  service.buyItem = function (itemIndex) {
    boughtitems.push(buyitems[itemIndex]);
    buyitems.splice(itemIndex, 1);

  };

 service.getBuyItems = function () {
    return buyitems;
  };

  service.getBoughtItems = function () {
    return boughtitems;
  };
}

})();
