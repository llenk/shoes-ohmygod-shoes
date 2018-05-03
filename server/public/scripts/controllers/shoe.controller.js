app.controller('shoeController', ['$http', 'ShoeService', function ($http, ShoeService) {
    console.log('angular loaded');
    var self = this;

    self.shoes = ShoeService.shoes;
    self.newShoe = ShoeService.newShoe;
    self.getRequest = ShoeService.getRequest;
    self.addNewShoe = ShoeService.addNewShoe;
    self.deleteShoe = ShoeService.deleteShoe;
    self.saveShoe = ShoeService.saveShoe;

    self.getRequest();
    
}]);