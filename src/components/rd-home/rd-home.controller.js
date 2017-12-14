class RdHomeController {
    constructor($http) {
        this.$http = $http;
    }

    $onInit() {  // wake up heroku api server
        this.$http.get('https://mysterious-wildwood-62874.herokuapp.com/api/wells/234') 
    }
}

export { RdHomeController };