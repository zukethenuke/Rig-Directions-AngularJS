class RdWellShowController {
    constructor($scope) {
        this.well = $scope.$parent.$resolve.well;
        this.mapUrl = "https://www.google.com/maps/embed/v1/directions?key=AIzaSyDKGkdynbpEe2Vq2AJaNGxtxiDjtpyPFSE&origin=Williston+ND&destination=" + this.well.latitude + "," + this.well.longitude;
        this.mapIsReady = true;
    }
    
    $onInit() {
    }
                
}

export { RdWellShowController };
