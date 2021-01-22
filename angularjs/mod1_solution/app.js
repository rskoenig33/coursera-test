(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.name = "";
  //$scope.msg = "Please Enter";

  $scope.sayMessage = function () {
    return $scope.msg;
  };

  $scope.CheckCount = function () {
    const orders = $scope.name.split(',');
    //console.log(orders.length)
    if($scope.name == ""){
     	$scope.msg = "Please Enter Data First!";}    
    else if(orders.length<=3){
    	$scope.msg = "Enjoy!";
    }else{
       $scope.msg = "Too Much!";}
    
  };
}

})();
