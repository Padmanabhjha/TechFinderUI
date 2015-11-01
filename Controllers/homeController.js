(function () {
    var app = angular.module("myapp");

    var homeController = function ($scope, $http) {
        $scope.message = "This is home view"
        var onsuccess = function (data) {
            alert('Inside success');
            alert(data);
            $scope.data = data;
            //important to parse
            var jsonObject = JSON.parse(data);
            alert(jsonObject);
            alert(jsonObject[0].Id);
            alert(data[0])
            $scope.id = jsonObject[0].Name;
        };

        var onError = function () {
            $scope.error = "something went wronge";

        };

        $scope.getTechnician = function (InstallationType) {

            alert(InstallationType);
            $http.get('http://localhost:60796/api/Technician?lat=21&longitude=25&skill=' + InstallationType).then(function (response) {
                alert(response);

            });
        };
       
        //extractService.getData().then(onsuccess,onError);
        
   };
    

    app.controller("homeController", ["$scope","$http", homeController]);

}());