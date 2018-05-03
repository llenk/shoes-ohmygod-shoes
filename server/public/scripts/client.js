console.log('javascript loaded');

var app = angular.module('shoeApp', []);

app.controller('shoeController', ['$http', function ($http) {
    console.log('angular loaded');
    var self = this;

    self.shoes = [];

    $http({
        method: 'GET',
        url: '/shoe'
    }).then(function(response) {
        self.shoes = response.data;
    }).catch(function(error) {
        console.log('there was an error', error);
    });
}]);