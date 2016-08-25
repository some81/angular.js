//module
var weatherApp = angular.module('weatherApp',['ngRoute','ngResource']);

weatherApp.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    .when('/forecast',{
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
    .when('/forecast/:days',{
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
});

weatherApp.service('forecastService', function(){
    
    this.city = 'New York, NY';
    
});

weatherApp.controller('homeController', ['$scope', 'forecastService', '$location', function($scope, forecastService, $location){
    
    $scope.city = forecastService.city;
    $scope.$watch('city', function(){
        forecastService.city = $scope.city; 
    });
    
    $scope.submit = function(){
        $location.path('/forecast');
    }
    
}]);

weatherApp.directive('weatherPanel', function(){
   return {
       restrict: 'E',
       templateUrl: 'pages/weatherPanel.html',
       replace: true,
       scope: {
           weatherDay: "=",
           convertToStandard: "&",
           convertToDate: "&",
           dateFormat: "@"
       }
   } 
});

weatherApp.controller('forecastController', ['$scope', 'forecastService', '$resource', '$routeParams', function($scope, forecastService, $resourse, $routeParams){
    
    $scope.city = forecastService.city;
    $scope.days = $routeParams.days || "2";
    
    $scope.watherAPI = $resourse("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, {get: { method: "JSONP" }});
    
    $scope.weatherResult = $scope.watherAPI.get({ q: $scope.city, mode: 'json', cnt: $scope.days, appid: '1127492854ba94e7e22765aaec822e78' });
    
    $scope.convertToFarenheit = function(degK){
        return Math.round((1.8 * (degK - 273) + 32));
    }
    
    $scope.convertToDate = function(date){
        return (date * 1000);
    }
    
    
}]);