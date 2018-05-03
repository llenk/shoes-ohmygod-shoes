app.service('ShoeService', ['$http', function($http) {
    console.log('ShoeService is loaded');
    var self = this;

    self.shoes = {list: []};
    self.newShoe = {name: '', cost: 0};
    self.getRequest = function() {
        $http({
            method: 'GET',
            url: '/shoe'
        }).then(function(response) {
            self.shoes.list = response.data;
        }).catch(function(error) {
            console.log('there was an error', error);
        });
    };
    self.addNewShoe = function() {
        $http({
            method: 'POST', 
            url: '/shoe',
            data: self.newShoe
        }).then(function(response) {
            console.log(response);
            self.getRequest();
        }).catch(function(error) {
            console.log('there was an error', error);
        });
    };
    self.deleteShoe = function(shoe) {
        $http({
            method: 'DELETE', 
            url: '/shoe',
            params: shoe
        }).then(function(response) {
            self.getRequest();
        }).catch(function(error) {
            console.log('there was an error', error);
        });
    };
    self.saveShoe = function(shoe) {
        $http({
            method: 'PUT',
            url: '/shoe',
            data: shoe
        }).then(function(response) {
            self.getRequest();
        }).catch(function(error) {
            console.log('there was an error :( ', error);
        });
    };
}]);