import { RdWellShowController } from './rd-well-show.controller';
import template from './rd-well-show.html';

const RdWellShowComponent = {
    bindings:{
        well: '<',
        resolveWell: '<',
    },
    controller: RdWellShowController,
    template,
};


export { RdWellShowComponent };
