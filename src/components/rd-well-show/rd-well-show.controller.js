class RdWellShowController {
    constructor($scope, rdCurrentLocationFactory) {
        this.well = $scope.$parent.$resolve.well;
        this.rdCurrentLocationFactory = rdCurrentLocationFactory;
        this.origin = {};
        this.mapReady = false;
    }
    
    $onInit() {
        if (this.rdCurrentLocationFactory.currentLocation.coords) {
            this.origin.latitude = this.rdCurrentLocationFactory.currentLocation.coords.latitude;
            this.origin.longitude = this.rdCurrentLocationFactory.currentLocation.coords.longitude;
            this.mapUrl = "https://www.google.com/maps/embed/v1/directions?key=AIzaSyDKGkdynbpEe2Vq2AJaNGxtxiDjtpyPFSE&origin=" + this.origin.latitude + "," + this.origin.longitude + "&destination=" + this.well.latitude + "," + this.well.longitude;
        }else {
            this.mapUrl = "https://www.google.com/maps/embed/v1/directions?key=AIzaSyDKGkdynbpEe2Vq2AJaNGxtxiDjtpyPFSE&origin=Williston+ND&destination=" + this.well.latitude + "," + this.well.longitude;
        }
        this.mapReady = true;
    }
                
}

export { RdWellShowController };
