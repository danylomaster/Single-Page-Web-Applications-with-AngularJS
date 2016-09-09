(function() {
    'use strict';
    angular.module('LCApp', [])
    .controller('LCController', LCController);

    LCController.$inject = ['$scope']; //dependency injection perfect for minification
    function LCController($scope) {
        $scope.message = "";
        $scope.foodList = "";
        $scope.messageStyle;
        $scope.checkIfTooMuch = function () {
            var list = $scope.foodList.trim();
            var style = {};
            style.color = colorMessageText(list);
            style['border'] = '1px solid '+borderColorMessageText(list);
          $scope.message = formGroupMessage(list);
          $scope.messageStyle = style;
        };
    };
    function formGroupMessage(list) {
        return (list.length==0)?"Please enter data first":(list.split(",").length<=3)?"Enjoy!":"Too much!";
    };
    function colorMessageText(list) {
        return (list.length==0)?'red':'green';
    }
    function borderColorMessageText(list) {
        return (list.length==0)?'red':'green';
    }

})();
