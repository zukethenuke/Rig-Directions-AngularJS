import angular from 'angular';
import ngRoute from 'angular-route';
import angularFilter from 'angular-filter';
import { RdSearchModule } from './components/rd-search';
import { RdHomeModule } from './components/rd-home';
import { RdButtonModule } from './components/rd-button';
import { RdWellShowModule } from './components/rd-well-show';
import { RdMapModule } from './components/rd-map';

const directionsAppModule = angular.module('directionsAppModule', [
    "ngRoute", 
    angularFilter, 
    RdSearchModule, 
    RdHomeModule, 
    RdButtonModule, 
    RdWellShowModule,
    RdMapModule,
])
    .config(function($routeProvider){
        $routeProvider
            .when('/', {template: `<rd-home></rd-home>`})
            .when('/search', {template: `<rd-search></rd-search>`})
            .when('/near', {templateUrl: 'src/views/near.tpl.html'})
    })
;

export { directionsAppModule };
