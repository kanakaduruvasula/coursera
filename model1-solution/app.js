(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', ['$scope',LunchCheckController]);

  function LunchCheckController($scope){
  $scope.msg = "";
  $scope.list = '';
  $scope.array = [];

  if (typeof String.prototype.trim != 'function') { // detect native implementations
     String.prototype.trim = function () {
        return this.replace(/^\s+/, '').replace(/\s+$/, '');
   };
 }

 $scope.list = $scope.list.trim();
 $scope.convertToArray = function(){
     $scope.array = $scope.list.split(',');
 }

$scope.countItems = function(){
    if ($scope.list == '') {
       $scope.array = [];
       $scope.msg = 'Please enter data first.';
       $scope.class = "red";
    } else if ($scope.array.length <= 3) {
		   $scope.msg = "Enjoy!";
       $scope.class = "green";
    } else {
        $scope.msg = "Too much!";
        $scope.class = "green";
		}
  }
}
})();
