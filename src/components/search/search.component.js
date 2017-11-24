import { SearchController } from './search.controller';
import template from './search.html';

const searchComponent = {
    bindings: {
        // wells: '<',
    },
    controller: SearchController,
    template,
};

export { searchComponent };