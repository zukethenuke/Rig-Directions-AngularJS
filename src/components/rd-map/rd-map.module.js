import { RdMapComponent } from './rd-map.component';

const rdMapModule = angular
    .module('rdMapModule', [])
    .component('rdMap', RdMapComponent)
    .name;

export { rdMapModule };
