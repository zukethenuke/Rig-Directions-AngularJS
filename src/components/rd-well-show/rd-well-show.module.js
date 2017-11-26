import { RdWellShowComponent } from './rd-well-show.component';

const rdWellShowModule = angular
    .module('rdWellShowModule', [])
    .component('rdWellShow', RdWellShowComponent)
    .name;

export { rdWellShowModule };
