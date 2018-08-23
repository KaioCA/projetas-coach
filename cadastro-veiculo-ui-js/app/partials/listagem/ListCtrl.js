app.controller('getcontroller', function($scope, $http, $location) {
    $scope.submit = true;
    $scope.update = false;
    $scope.cancel = false;
    $scope.userid = true;

	 $scope.getfunction = function(){
	 	var url = "http://localhost:8080/veiculos";
		
	 	$http.get(url).then(function (response) {
	 		$scope.response = response.data
	 	}, function error(response) {
	 		$scope.postResultMessage = "Error with status: " +  response.statusText;
         });
     }

    



  
    $scope.deleteUser = function(user) {

        //$http DELETE function
        $http({
    
          method: 'DELETE',
          url: 'http://localhost:8080/veiculos/' + user.id
    
        }).then(function successCallback(response) {
    
          alert("User has deleted Successfully");
          var index = $scope.users.indexOf(user);
          $scope.users.splice(index, 1);
    
        }, function errorCallback(response) {
    
          alert("Error. while deleting user Try Again!");
    
        });
    };





    $scope.submitForm = function(){
        var config = {
            headers : {
                'Content-Type': 'application/json;charset=utf-8;'}}
        var data = {
            id: $scope.id
        };
 
     
    }
});



    
