app.controller('getcontroller', function($scope, $http, $location) {
    $scope.submit = true;
    $scope.update = false;
    $scope.cancel = false;
    $scope.userid = false;

	
	 	var url = "http://localhost:8080/veiculos";
		
	 	$http.get(url).then(function (response) {
             $scope.response = response.data
	 	}, function error(response) {
	 		$scope.postResultMessage = "Error with status: " +  response.statusText;
         });
     

         $scope.editUser = function(user) {
            $scope.user = user;
            $scope.submit = false;
            $scope.update = true;
            $scope.cancel = true;
            $scope.userid = true;
        
          };
        
        
          //cancel Uodate
          $scope.cancelUpdate = function() {
            $scope.user = null;
            $scope.submit = true;
            $scope.update = false;
            $scope.cancel = false;
            $scope.userid = false;
          };



  
    $scope.deleteUser = function(user) {

        //$http DELETE function
        $http({
    
          method: 'DELETE',
          url: 'http://localhost:8080/veiculos/' + user.id
          
    
        }).then(function successCallback(response) {
    
          alert("User has deleted Successfully");
          window.location.reload();
          var index = $scope.users.indexOf(user);
          $scope.users.splice(index, 1);
         
    
        }, function errorCallback(response) {
    
          alert("Error. while deleting user Try Again!");
    
        });
    };

    $scope.updateUser = function() {

        var url = "http://localhost:8080/veiculos";
  
    var config = {
            headers : {
                'Accept': 'text/plain'
            }
    }
    var data =  $scope.user;
      
   
    
    $http.post(url, data, config).then(function (response) {
        $scope.postResultMessage = response.data;
        window.location.reload();
       
    }, function error(response) {
        $scope.postResultMessage = "Error with status: " +  response.statusText;
    });
    window.location.reload();
    $scope.id = "";
    $scope.marca = "";
}
     
    




    $scope.submitForm = function(){
        var config = {
            headers : {
                'Content-Type': 'application/json;charset=utf-8;'}}
        var data = {
            id: $scope.id
        };
 
         //Set $scope on Edit button click
 

  $scope.submitForm = function(){
    var url = "http://localhost:8080/veiculos";
  
    var config = {
            headers : {
                'Accept': 'text/plain'
            }
    }
    var data = {
        id: $scope.id,
        marca: $scope.marca
    };
    
    $http.post(url, data, config).then(function (response) {
        $scope.postResultMessage = response.data;
       
    }, function error(response) {
        $scope.postResultMessage = "Error with status: " +  response.statusText;
    });
    
    $scope.id = "";
    $scope.marca = "";
}
     
    }
});



    
