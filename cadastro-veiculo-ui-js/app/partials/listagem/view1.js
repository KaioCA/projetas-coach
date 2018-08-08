'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/listagem', {
    templateUrl: '../partials/listagem/view1.html',
    controller: 'MenuCtrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);