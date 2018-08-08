'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.when('/', {
    templateUrl: '/partials/initial.html',
    controller: 'MenuCtrl'
  });

    $routeProvider.when('/cadastro', {
      templateUrl: '../partials/cadastro/view2.html',
      controller: 'MenuCtrl'
    });

   
      $routeProvider.when('/listagem', {
        templateUrl: '../partials/listagem/view1.html',
        controller: 'ListCtrl'
      });

      $routeProvider.otherwise({redirectTo: '/'});
      
    }])

    
    myApp.constant("CONSTANTS", {
  getUserByIdUrl: "/veiculos/{id}",
  getAllUsers: "/user/getAllUsers",
  saveUser: "/user/saveUser"
});


 

