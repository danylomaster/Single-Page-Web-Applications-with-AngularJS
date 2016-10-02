(function() {
    'use strict';
    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
    .directive('foundItems', FoundItemsDirective);

    function FoundItemsDirective() {
      return {
        restrict:"E",
        templateUrl: 'template/foundItemsTable.html',
        scope: {
          items: '<',
          onRemove: '&'
        },
        controller: FoundItemsDirectivController,
        controllerAs: 'list',
        bindToController: true//,
      }
    };

    function FoundItemsDirectivController() {
      var list = this;

      list.showItems = function(){
        return (list.items.length>0)?true:false;
      }
    };

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
      var nid = this;
      nid.searchTerm="";
      nid.nothingFound = false;
      nid.found = [];

      nid.getItems = function(){
        if (nid.searchTerm.length>0){
        var promise = MenuSearchService.getMatchedMenuItems(nid.searchTerm);

        promise.then(function (response) {
          nid.found = response;
          nid.nothingFound=checkForEmpty(nid.found);
        });
      } else {
        nid.nothingFound = true;
        nid.found = [];
      }
      };

      nid.removeItem = function(itemIndex){
        MenuSearchService.removeItem(itemIndex);
      };
    };

    function checkForEmpty(arr) {
      return (arr.length>0)?false:true;
    }

    MenuSearchService.$ingect = ['$http','ApiBasePath']
    function MenuSearchService($http,ApiBasePath) {
      var service = this;
      var foundItems = [];

      service.getMatchedMenuItems = function (searchTerm) {
        return $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json")
        })
        .then(function(result){
          foundItems = result.data.menu_items.filter(function (item) {
            return item.description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
          });
          return foundItems;
        });
      };
      service.removeItem = function (itemIndex) {
        foundItems.splice(itemIndex,1);
      }
    };

})();
