import { SearchController } from './search.controller.js';
import { searchComponent }  from './search.component.js';

angular.module('searchModule', [])
    .controller('searchController', SearchController)
    .component('searchComponent', searchComponent);

export { searchModule };