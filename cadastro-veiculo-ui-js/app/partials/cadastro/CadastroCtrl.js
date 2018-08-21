app.controller('postcontroller', function($scope, $http, $location) {
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
});