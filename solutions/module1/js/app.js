(function() {
    'use strict';
    angular.module('DIApp', [])
        .controller('DIController', DIController);

    DIController.$inject = ['$scope','$filter']; //dependency injection perfect for minification
    function DIController($scope, $filter) {
        $scope.name = "Danylo";
        $scope.upper = function () {
          var upCase = $filter('uppercase');
          $scope.name = upCase($scope.name);
        }
    };

})();
