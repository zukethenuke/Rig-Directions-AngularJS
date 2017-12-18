const rdCurrentLocationFactory = function() {
    let factory = this;
    factory.currentLocation = {}

    factory.getCurrentLocation = function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                factory.currentLocation = position;
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }
    
    return factory;

}

export { rdCurrentLocationFactory };
