'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('app', [
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
      controller: ''
    });

   
      $routeProvider.when('/listagem', {
        templateUrl: '../partials/listagem/view1.html',
        controller: 'ListCtrl'
      });

      $routeProvider.otherwise({redirectTo: '/'});
      
    }]);

  

    app.controller('ListCtrl', ['$scope','listService', 
  function ($scope, listService) {

      $scope.getUser = function () {
          var id = $scope.user.id;
          listService.getUser($scope.user.id)
            .then(function success(response) {
                $scope.user = response.data;
                $scope.user.id = id;
                $scope.message='';
                $scope.errorMessage = '';
            },
            function error (response) {
                $scope.message = '';
                if (response.status === 404){
                    $scope.errorMessage = 'User not found!';
                }
                else {
                    $scope.errorMessage = "Error getting user!";
                }
            });
      };


$scope.getAllUsers = function () {
    listService.getAllUsers()
      .then(function success(response) {
          $scope.users = response.data._embedded.users;
          $scope.message='';
          $scope.errorMessage = '';
      },
      function error (response) {
          $scope.message='';
          $scope.errorMessage = 'Error getting users!';
      });
}
}]);
  
app.service('listService', [ '$http', function($http) {
 
  this.getUser = function getUser(userId) {
      return $http({
          method : 'GET',
          url : 'http://localhost:8080/veiculos/' + userId
      });
  }


this.getAllUsers = function getAllUsers() {
  return $http({
      method : 'GET',
      url : 'http://localhost:8080/veiculos'
  });
}

} ]);

