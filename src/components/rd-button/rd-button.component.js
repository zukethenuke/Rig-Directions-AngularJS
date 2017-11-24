import { RdButtonController } from './rd-button.controller';

import template from './rd-button.html';

const rdButtonComponent = {
    bindings: {
        buttonUrl: '@',
        buttonIcon: '@',
    },
    controller: RdButtonController,
    template,
    transclude: true,
}

export { rdButtonComponent };
