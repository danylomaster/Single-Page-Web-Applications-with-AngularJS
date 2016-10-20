(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['$stateParams','items'];
function ItemsController($stateParams,items) {
  var itemsList = this;
  itemsList.items = items.data.menu_items;
  itemsList.category = $stateParams.categoryName;
  //console.log($stateParams.categoryShortName);
}

})();
