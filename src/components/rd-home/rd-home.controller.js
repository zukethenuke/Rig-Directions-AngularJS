class RdHomeController {
    constructor($http, rdCurrentLocationFactory) {
        this.$http = $http;
        this.rdCurrentLocationFactory = rdCurrentLocationFactory;
        this.currentLocation = {"x": "y"};
    }
    
    $onInit() {  // wake up heroku api server
        this.$http.get('https://mysterious-wildwood-62874.herokuapp.com/api/wells/234');
        this.rdCurrentLocationFactory.getCurrentLocation();
    }
}

RdHomeController.$inject = ['$http', 'rdCurrentLocationFactory'];
export { RdHomeController };