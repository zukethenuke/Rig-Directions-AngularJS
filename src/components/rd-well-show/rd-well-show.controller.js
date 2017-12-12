class RdWellShowController {
    constructor(well) {
        this.well = well;
        // this.$http = $http;
        // this.wellId = $routeParams.wellId;
        console.log('hello from controller');
        console.log('well', this.well);
        // debugger;
    }

    $onInit() {
        console.log('init');
        // this.$http.get('https://mysterious-wildwood-62874.herokuapp.com/api/wells/' + this.wellId)
        //     .then((response) => {
        //         this.well = response.data.well[0];
        //     }, (response) => {
        //         console.log('http error', response);
        //     })
        //     .then(() => {
        //         this.mapUrl = "https://www.google.com/maps/embed/v1/directions?key=AIzaSyDKGkdynbpEe2Vq2AJaNGxtxiDjtpyPFSE&origin=Williston+ND&destination=" + this.well.latitude + "," + this.well.longitude;
        //         this.mapIsReady = true;
        //     })

    }


}

export { RdWellShowController };
