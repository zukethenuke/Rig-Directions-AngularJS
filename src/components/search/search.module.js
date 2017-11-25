import { searchComponent }  from './search.component';
// import { fuzzyFilter } from './search.filter';

const searchModule = angular.module('searchModule', [])
    .component('searchComponent', searchComponent)
    // .filter('fuzzyFilter', fuzzyFilter)
    .name;

export { searchModule };