angular.module("app", ['ngResource','ngRoute']);

angular.module("app").
  config(function($routeProvider, $locationProvider){
// to disable the base tag check
// because of Angular throw error:'$location in HTML5 mode requires a <base> tag to be present'
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  // turn on html5Mode for routing
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', { templateUrl: '/partials/main',
      controller: 'mainCtrl'});
});

angular.module("app").controller('mainCtrl', function($scope){
  $scope.myVar = 'Hello Angular 1.5';
});
