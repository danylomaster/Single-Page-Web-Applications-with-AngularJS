(function () {
'use strict';

angular.module('MenuApp')
.component('itemsList', {
  templateUrl: 'src/templates/items.component.template.html',
  bindings: {
    items: '<',
    category: '<'
  }
});

})();
