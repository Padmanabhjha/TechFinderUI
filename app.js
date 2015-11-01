(function () {
    var app = angular.module("myapp", ["ngRoute"]);
    var fnalert = function (v) {
        alert(v);
    };
    app.config(function ($routeProvider) {
        $routeProvider.when("/item", {
            templateUrl: "Views/item.html",
            controller: "itemController"

        })
            .when("/main", {
                templateUrl: "Views/home.html",
                controller: "homeController"
            })
            //.when("/main", {
            //    templateUrl: "Views/map.html",
            //    controller: "homeController"
            //})
            .when("/product", {
                templateUrl: "Views/product.html",
                controller: "productController"

            })
        .otherwise({ redirectTo: "/main" });
    });


}());