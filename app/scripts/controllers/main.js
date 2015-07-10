'use strict';

/**
 * @ngdoc function
 * @name myYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myYeomanApp
 */
angular.module('myYeomanApp')
  .controller('MainCtrl', function ($scope,localStorageService) {
    var todosInStore = localStorageService.get('todos');
    $scope.todos = todosInStore && todosInStore.split('\n') || [];
    $scope.$watch('todos', function () {
      localStorageService.add('todos', $scope.todos.join('\n'));
    }, true);
    $scope.addTodo = function () {
      if($scope.todo === "" || $scope.todo === undefined) {
        //alert("值不能为空！");
        return;
      }
      var ok = true;
      angular.forEach($scope.todos,function(value,key){
        console.log("key ",key);
        console.log("value ",value);
        console.log("$scope.todo ",$scope.todo);
        console.log("value == $scope.todo ",value === $scope.todo);
        if(value === $scope.todo){
          ok = false;
          return;
        }
      });
      if (ok){
        $scope.todos.push($scope.todo);
      } else {
        //alert("已存在"+$scope.todo);
      }
      $scope.todo = '';

    };
    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
  });
