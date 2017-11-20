import { searchComponent }  from './search.component';

const searchModule = angular.module('searchModule', [])
    .component('searchComponent', searchComponent)
    .name;

export { searchModule };