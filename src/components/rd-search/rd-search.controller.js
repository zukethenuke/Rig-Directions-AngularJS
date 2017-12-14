class RdSearchController {
    constructor($http) {
        this.$http = $http;
    }

    $onInit() {
        if (localStorage.getItem("searchValue")) { this.listFromLocalStorage() };
    }

    listFromLocalStorage() {
        this.searchValue = localStorage.getItem("searchValue");
        this.getWellList();
    }

    getWellList() {
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
            // console.log(this.wells);
            // localStorage.setItem("wells", this.wells);
        };
    }
}

export { RdSearchController };