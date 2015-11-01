(function () {
    var app = angular.module("myapp");

    var itemController = function ($scope) {
        $scope.message="This is item view"
    };

    app.controller("itemController", ["$scope", itemController]);

}());