class RdSearchController {
    constructor($http) {
        this.$http = $http;
        this.loading = false;
    }

    $onInit() {
        if (localStorage.getItem("searchValue")) { this.getSearchFromLocalStorage() };
    }

    getSearchFromLocalStorage() {
        this.searchValue = localStorage.getItem("searchValue");
        this.getWellList();
    }

    getWellList() {
        this.loading = true;
        this.message = '';
        const searchValue = this.searchValue;

        localStorage.setItem("searchValue", searchValue);

        this.$http({
            method: 'GET',
            // url: 'http://localhost:3000/api/wells/',
            url: 'https://mysterious-wildwood-62874.herokuapp.com/api/wells',
            params: {searchValue: searchValue}
        }).then((response) => this.formatRseponse(response));
    }

    clearSearch() {
        this.searchValue = '';
        this.message = '';
        this.wells = [];
        localStorage.setItem("searchValue", '');
    }

    formatRseponse(response) {
        if (response.data.error) {
            this.wells = [];
            this.message = response.data.error;
        }else {
            this.wells = response.data.wells;
        };
        this.loading = false;
    }
}

export { RdSearchController };