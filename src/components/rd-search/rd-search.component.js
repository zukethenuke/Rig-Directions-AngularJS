import { RdSearchController } from './rd-search.controller';
import template from './rd-search.html';

const RdSearchComponent = {
    bindings: {
        currentLocation: '<'
    },
    controller: RdSearchController,
    template,
};

export { RdSearchComponent };