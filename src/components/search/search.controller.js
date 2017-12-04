class SearchController {
    constructor($http) {
        this.$http = $http;
    }

    $onInit() {
        this.searchValue = '';
    }

    getWellList() {
        const searchValue = this.searchValue;
        console.log(this.searchValue);
        this.$http({
            method: 'GET',
            url: 'http://localhost:3000/api/wells/',
            params: {searchValue: searchValue}
        }).then((response) => this.wells = response.data.wells);
    }
}

export { SearchController };