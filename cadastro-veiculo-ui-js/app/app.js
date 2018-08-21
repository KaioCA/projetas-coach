'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'app.version'
])

.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.when('/', {
    templateUrl: '/partials/initial.html',
    controller: ''
  });

    $routeProvider.when('/cadastro', {
      templateUrl: '../partials/cadastro/view2.html',
      controller: 'postcontroller'
    });

   
      $routeProvider.when('/listagem', {
        templateUrl: '../partials/listagem/view1.html',
        controller: 'getcontroller'
      });

      $routeProvider.otherwise({redirectTo: '/'});
      
    }]);

  

  

 