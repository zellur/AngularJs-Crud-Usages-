var app = angular.module('app', []);

app.controller('homeCtrl', function($scope) {

    $scope.user = {};
    $scope.users = [];

    $scope.saveUser = function() {
        $scope.users.push($scope.user);
        $scope.user = {};
    }
    $scope.editUser = function(model) {
        $scope.user = model;
    }
    $scope.deleteUser = function(model) {
        var index = $scope.users.indexOf(model);
        $scope.users.splice(index, 1);
    }
});