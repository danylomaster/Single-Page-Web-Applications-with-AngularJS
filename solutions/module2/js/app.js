(function() {
    'use strict';
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyShoppingController(ShoppingListCheckOffService) {
      var buy = this;
      buy.list = ShoppingListCheckOffService.getToBuyList();
      buy.check = emptyList;

      buy.buyItem = function (itemIndex) {
        ShoppingListCheckOffService.buyItem(itemIndex);
      };
    };

    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
      var bought = this;
      bought.list = ShoppingListCheckOffService.getBoughtList();
      bought.check = emptyList;
    };

    function emptyList(list) {
      return (list.length == 0)?true:false;
    };

    function ShoppingListCheckOffService() {
      var service = this;
      // List of 'to buy' shopping items
      var toBuyList = [
        {
          name: 'Water',
          quantity: '10 bottlees'
        },
        {
          name: 'Soda',
          quantity: '5 bottlees'
        },
        {
          name: 'Beer',
          quantity: '15 bottlees'
        },
        {
          name: 'Wine',
          quantity: '2 bottlees'
        },
        {
          name: 'Hamburgers',
          quantity: '10 pieces'
        }
      ];
      // List of 'boght' shopping items
      var boughtList = [];

      service.getToBuyList = function () {
        return toBuyList;
      };

      service.getBoughtList = function () {
        return boughtList;
      };

      service.buyItem = function (itemIndex) {
        boughtList.push(toBuyList[itemIndex]);
        toBuyList.splice(itemIndex, 1);
      };

    }

})();
