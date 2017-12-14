import { RdListComponent } from './rd-list.component';

const RdListModule = angular
    .module('RdListModule', [])
    .component('rdList', RdListComponent)
    .name;

export { RdListModule };
