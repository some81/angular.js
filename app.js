var app = angular.module('myApp', []);

app.controller('myController', ['$scope', '$filter', '$http', function($scope, $filter, $http) {

    $scope.handle = "";
    
    $scope.lowercase = function(){
        return $filter('lowercase')($scope.handle);
    };
    
    $scope.characters = 5;
    
    $http.get('/api')
        .success(function(result){
            $scope.rule = result;
        })
        .error(function(data.status){
            console.log(data);
        });
    
    $scope.newRule = "";
    
    $scope.addRule = function(){
        $http.post('/api', { newRule: $scope.newRule })
        .success(function(result){
            $scope.rules = result;
            $scope.newRule = "";
        })
        .error(function(data,status){
           console.log(data);
        });
    };
    
}]);