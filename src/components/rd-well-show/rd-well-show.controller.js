class RdWellShowController {
    constructor($http, $routeParams) {
        this.$http = $http;
        this.wellId = $routeParams.wellId;
    }

    $onInit() {
        // console.log('hello');
        // this.$http.get('https://mysterious-wildwood-62874.herokuapp.com/api/wells/' + this.wellId)
        //     .then((response) => {
        //         this.well = response.data.well[0];
        //     }, (response) => {
        //         console.log('http error', response);
        //     })
    }


}

export { RdWellShowController };
