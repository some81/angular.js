var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
   
    $routeProvider
    .when('/',{
        templateUrl: 'pages/main.htm',
        controller: 'mainController'
    })
    .when('/second',{
        templateUrl: 'pages/second.htm',
        controller: 'scondController'
    });
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log){
    
    
    
}]);

myApp.controller('secondController', ['$scope', '$log', function($scope, $log){
    
    
    
}]);