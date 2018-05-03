console.log('javascript loaded');

var app = angular.module('twitterApp', []);

app.controller('twitterController', ['$http', function ($http) {
    console.log('angular loaded');
    var self = this;
}]);