console.log('javascript loaded');

var app = angular.module('shoeApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/shoe', {
        templateUrl: './views/shoe.html', 
        controller: 'shoeController as vm'
    }).otherwise({
        template: '<h2>404</h2>'
    });
});
