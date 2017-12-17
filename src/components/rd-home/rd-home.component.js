import { RdHomeController } from './rd-home.controller';
import template from './rd-home.html';

const RdHomeComponent = {
    bindings: {
        currentLocation: '<'
    },
    controller: RdHomeController,
    template,
};

export { RdHomeComponent }
