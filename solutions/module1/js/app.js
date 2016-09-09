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
            $scope.message = formGroupMessage(list);
            $scope.messageStyle = messageTextStyle(list);
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
    function messageTextStyle(list) {
        return {
            color: colorMessageText(list),
            border: '1px solid '+borderColorMessageText(list)
        }
    }

})();
