var app = angular.module("appModule", ["LocalStorageModule"]);
app.filter('makeUppercase', function () {
    return function (item) {
        return item.toUpperCase();
    };
  });


app.controller("myCtrl", function($scope, CrudService){

  
    $scope.products = CrudService.getAll();
    $scope.product = {
        name: null,
        status: null
    };

    $scope.addItem= function(){

        $scope.errortext = "";
        if (!$scope.product.name) {return;}        
        if ($scope.products.indexOf($scope.product) == -1) {
            CrudService.add($scope.product);

            $scope.product = {
                name: null,
                status: null
            };
        } else {
            $scope.errortext = "The item is already in your shopping list.";
        }

        
    };

    $scope.removeItem = function(product){
        $scope.products = CrudService.removeItem(product);
        $scope.product = {
            name: null,
            status: null
        };
    };

    $scope.$watch('product.status', function(newvalue,oldvalue) {
        console.log(newvalue);
    });

    $scope.change = function(product){
        console.log(product);
        $scope.products = CrudService.updateItem(product);
        $scope.product = {
            name: null,
            status: null
        };
    };
    $scope.nameD = "";
    $scope.descrip = function(product) {

        $scope.nameD=product.name;
    };


});

