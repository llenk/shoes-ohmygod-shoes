console.log('javascript loaded');

var app = angular.module('shoeApp', []);

app.controller('shoeController', ['$http', 'HttpService', function ($http, HttpService) {
    console.log('angular loaded');
    var self = this;

    self.shoes = HttpService.shoes;
    self.getRequest = HttpService.getRequest;

    self.getRequest();
    
}]);