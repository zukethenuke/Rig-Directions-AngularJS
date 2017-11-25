import angular from 'angular';
import ngRoute from 'angular-route';
import angularFilter from 'angular-filter';
import { searchModule } from './components/search';
import { homeModule } from './components/home';
import { rdButtonModule } from './components/rd-button';

const directionsAppModule = angular.module('directionsAppModule', ["ngRoute", angularFilter, searchModule, homeModule, rdButtonModule])
    .config(function($routeProvider){
        // $routeProvider.when('/', {templateUrl: 'src/views/home.tpl.html'});
        $routeProvider.when('/', {template: `<home-component></home-component>`});
        $routeProvider.when('/search', {template: `<search-component></search-component>`});
        $routeProvider.when('/near', {templateUrl: 'src/views/near.tpl.html'});
    })
;

export { directionsAppModule };
