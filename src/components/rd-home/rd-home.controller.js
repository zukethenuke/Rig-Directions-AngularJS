class RdHomeController {
    constructor($http) {
        this.$http = $http;
        this.currentLocation = {"x": "y"};
    }
    
    $onInit() {  // wake up heroku api server
        this.$http.get('https://mysterious-wildwood-62874.herokuapp.com/api/wells/234');

        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    this.currentLocation = position;
                });
            } else {
                alert("Geolocation is not supported by this browser.");
            }
        }
        
        getLocation();
    }
}

export { RdHomeController };