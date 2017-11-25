import { RdListItemController } from './rd-list-item.controller';
import template from './rd-list-item.html';

const RdListItemComponent = {
    bindings: {
        well: '<',
    },
    controller: RdListItemController,
    template,
};

export { RdListItemComponent };
