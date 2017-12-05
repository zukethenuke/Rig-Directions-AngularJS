class SearchController {
    constructor($http) {
        this.$http = $http;
    }

    $onInit() {
        this.searchValue = '';
    }

    getWellList() {
        this.message = '';
        const searchValue = this.searchValue;

        this.$http({
            method: 'GET',
            // url: 'http://localhost:3000/api/wells/',
            url: 'https://mysterious-wildwood-62874.herokuapp.com/api/wells',
            params: {searchValue: searchValue}
        }).then((response) => this.formatRseponse(response));
    }

    formatRseponse(response) {
        if (response.data.error) {
            this.wells = [];
            this.message = response.data.error;
        }else {
            this.wells = response.data.wells;
        };
    }
}

export { SearchController };