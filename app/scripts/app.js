'use strict';

/**
 * @ngdoc overview
 * @name myYeomanApp
 * @description
 * # myYeomanApp
 *
 * Main module of the application.
 */
angular
  .module('myYeomanApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .service('Alert', ['$modal', function ($modal) {
    this.alert = function (txt, err) {
      return $modal.open({
        templateUrl: 'views/w/alert.html',
        size: 'sm',
        controller: function ($scope, $modalInstance, txt) {
          $scope.txt = txt;
          $scope.err = err;
          $scope.ok = function () {
            $modalInstance.close();
          };
        },
        resolve: {
          txt: function () {
            return txt;
          },
          err: function () {
            return err;
          }
        }
      }).result;
    };
  }]);
