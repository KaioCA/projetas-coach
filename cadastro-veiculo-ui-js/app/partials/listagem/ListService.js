app.service('ListService', [ '$http', function($http) {
 
    this.getUser = function getUser(userId) {
        return $http({
            method : 'GET',
            url : 'users/' + userId
        });
    }
} ]);

this.getAllUsers = function getAllUsers() {
    return $http({
        method : 'GET',
        url : 'http://localhost:8080/veiculos'
    });
}