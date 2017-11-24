import { wells } from '../../data/start-up-data';

class SearchController {
    constructor() {
        this.wells = wells;

    }

    $onInit() {
        this.searchValue = '';
    }
}

export { SearchController };