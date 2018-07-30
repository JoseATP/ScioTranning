/*var app =  angular.module("Model",[]); //Retorna una refrencia a la app, dentro del parentesis van los modulos que se usaran
app.controller("FirstController",function($scope){
    $scope.name="Jose";

});*/
//$Scope,



var app = angular.module("Model", []); 
app.controller("myCtrl", function($scope) {
    $scope.products = ["Milk", "Bread", "Cheese"];
    $scope.addItem = function () {
        $scope.errortext = "";
        if (!$scope.addMe) {return;}        
        if ($scope.products.indexOf($scope.addMe) == -1) {
            $scope.products.push($scope.addMe);
        } else {
            $scope.errortext = "The item is already in your shopping list.";
        }
    }
    $scope.removeItem = function (x) {
        $scope.errortext = "";    
        $scope.products.splice(x, 1);
    }
});