class RdWellShowController {
    constructor($http, $routeParams) {
        this.$http = $http;
        this.wellId = $routeParams.wellId;
        // this.well = {hello: 'hello'};


    }

    $onInit() {
        this.$http.get('https://mysterious-wildwood-62874.herokuapp.com/api/wells/' + this.wellId)
            .then((response) => {
                console.log('success', response.data.well[0]);
                this.well = response.data.well[0];
            }, (response) => {
                console.log('error', response);
            })
    }


}

export { RdWellShowController };
