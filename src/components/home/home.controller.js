class HomeController {
    constructor($http) {
        this.$http = $http;
    }

    $onInit() {
        this.$http.get('https://mysterious-wildwood-62874.herokuapp.com/api/wells/234')  //wake up heroku api server
        // this.initialData = this.getInitialData();
    }

    getInitialData() {
        // const initialData = this.$http.get('https://mysterious-wildwood-62874.herokuapp.com/api/wells/startup')
        //     .then(function(response) {
        //         console.log('success', response);
        //         return response;
        //     }, function(response) {
        //         console.log('error', response);
        //         return response;
        //     })
    }
}

export { HomeController };