import template from './rd-list.html';
import { RdListController } from './rd-list.controller.js';

const RdListComponent = {
    bindings: {
        list: '<'
    },
    controller: RdListController,
    template,
    transclude: true,
}

export { RdListComponent };