app.controller('ListCtrl', ['$scope','ListService', 
  function ($scope,ListService) {
      $scope.getUser = function () {
          var id = $scope.user.id;
          ListService.getUser($scope.user.id)
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
}]);

$scope.getAllUsers = function () {
    ListService.getAllUsers()
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