const getWellFactory = function($http) {
    return {
        getWell: function() {
            console.log('hello from service', this.wellId);
            this.$http.get('https://mysterious-wildwood-62874.herokuapp.com/api/wells/' + this.wellId)
                .then((response) => {
                    this.well = response.data.well[0];
                }, (response) => {
                    console.log('http error', response);
                })
        }
    }
}

export { getWellFactory };









// const getWellService = function($http) {
//     return well: function getWell() {
//         return $http.get('https://mysterious-wildwood-62874.herokuapp.com/api/wells/' + this.wellId)
//             .then((response) => {
//                 console.log('success', response);
//                 return response.data.well[0];
//                 }, (response) => {  
//                     console.log('http error', response);
//                 });
//         }
// }

// export { getWellService };