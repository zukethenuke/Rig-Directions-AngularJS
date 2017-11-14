import angular from 'angular';
// import { SearchController } from './search.controller';
import { searchComponent }  from './search.component';

const searchModule = angular.module('searchModule', [])
    // .controller('SearchController', SearchController)
    .component('searchComponent', searchComponent);

export default searchModule ;