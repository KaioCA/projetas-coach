'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cadastro', {
    templateUrl: '../partials/cadastro/view2.html',
    controller: 'MenuCtrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);