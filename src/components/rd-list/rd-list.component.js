import template from './rd-list.html';

const RdListComponent = {
    bindings: {
        list: '<'
    },
    template,
    transclude: true,
}

export { RdListComponent };