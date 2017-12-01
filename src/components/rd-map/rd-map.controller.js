class RdMapController {
    constructor($http, $routeParams) {
        this.$http = $http;
        this.$routeParams = $routeParams;
        this.render = this.render.bind(this);
        this.wellId = this.$routeParams.wellId;
    }

    $onInit() {
        this.$http.get('https://mysterious-wildwood-62874.herokuapp.com/api/wells/' + this.wellId)
        .then((response) => {
            let well = response.data.well[0];
        }, (response) => {
            console.log('http error', response);
        }).then((well) => {
            this.render(well);
        })
    }

    render(well) {
        this.mapUrl = "https://www.google.com/maps/embed/v1/directions?key=AIzaSyDKGkdynbpEe2Vq2AJaNGxtxiDjtpyPFSE&origin=Williston+ND&destination=" + this.well.latitude + "," + this.well.longitude;        
    }
}

export { RdMapController };