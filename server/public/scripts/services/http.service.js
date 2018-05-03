app.service('HttpService', ['$http', function($http) {
    console.log('HttpService is loaded');
    var self = this;

    self.shoes = {list: []};
    self.getRequest = function() {
        $http({
            method: 'GET',
            url: '/shoe'
        }).then(function(response) {
            self.shoes.list = response.data;
        }).catch(function(error) {
            console.log('there was an error', error);
        });
    }
}]);