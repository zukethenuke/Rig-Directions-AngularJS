import template from './rd-button.html';

const RdButtonComponent = {
    bindings: {
        buttonUrl: '@',
        buttonIcon: '@',
    },
    template,
    transclude: true,
}

export { RdButtonComponent };
