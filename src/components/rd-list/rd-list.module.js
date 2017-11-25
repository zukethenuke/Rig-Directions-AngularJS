import { RdListComponent } from './rd-list.component';

const rdListModule = angular
    .module('rdListModule', [])
    .component('rdList', RdListComponent)
    .name;

export { rdListModule };
