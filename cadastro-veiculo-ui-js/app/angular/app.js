var crud = angular.module("crud", []);

crud.controller("controller", function ($scope) {

   $scope.novoCliente = {};
   $scope.clienteSelecionado = {};

   $scope.clientes = [
       {nome: "Kaio Caldeira de Araújo", telefone: 53991000000, email: "kaio@gmail.com"},
       {nome: "Iago Baiano", telefone: 53999111111, email: "iago@gmail.com"},
       {nome: "Fábio Reis", telefone: 53991222222, email: "fabao@gmail.com"},
   ];
   
   $scope.salvar = function () {
       $scope.clientes.push($scope.novoCliente);
       $scope.novoCliente = {};
   };
   
   $scope.selecionaCliente = function (cliente) {
        $scope.clienteSelecionado = cliente;
   };

   $scope.alterarCliente = function () {
       
   };

   $scope.excluirCliente = function(){
        $scope.clientes.splice($scope.clientes.indexOf($scope.clienteSelecionado), 1);
   };
   
});