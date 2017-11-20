import { homeComponent } from './home.component';

const homeModule = angular
    .module('homeModule', [])
    .component('homeComponent', homeComponent)
    .name;

export { homeModule };