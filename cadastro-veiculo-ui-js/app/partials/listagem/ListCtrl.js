app.controller('getcontroller', function($scope, $http, $location) {
	$scope.getfunction = function(){
		var url = "http://localhost:8080/veiculos";
		
		$http.get(url).then(function (response) {
			$scope.response = response.data
		}, function error(response) {
			$scope.postResultMessage = "Error with status: " +  response.statusText;
		});
	}
});
