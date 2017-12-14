import { RdSearchComponent }  from './rd-search.component';
import './rd-search.css';

const RdSearchModule = angular.module('RdSearchModule', [])
    .component('rdSearch', RdSearchComponent)
    .name;

export { RdSearchModule };