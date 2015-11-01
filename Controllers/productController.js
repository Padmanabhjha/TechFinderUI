(function () {
    var app = angular.module("myapp");
    
    var productController = function ($scope) {
        $scope.message = "product controller view";
    };

    app.controller("productController",["$scope",productController])
}());