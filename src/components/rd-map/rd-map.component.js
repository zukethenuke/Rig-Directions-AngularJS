import { RdMapController } from './rd-map.controller';
import template from './rd-map.html';

const RdMapComponent = {
    bindings: {
        well: '<',
    },
    template,
    controller: RdMapController,
}

export { RdMapComponent };
