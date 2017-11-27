import angular from 'angular';
import ngRoute from 'angular-route';
import angularFilter from 'angular-filter';
import { searchModule } from './components/search';
import { homeModule } from './components/home';
import { rdButtonModule } from './components/rd-button';
import { rdWellShowModule } from './components/rd-well-show';

const directionsAppModule = angular.module('directionsAppModule', [
    "ngRoute", 
    angularFilter, 
    searchModule, 
    homeModule, 
    rdButtonModule, 
    rdWellShowModule,
])
    .config(function($routeProvider){
        // $routeProvider.when('/', {templateUrl: 'src/views/home.tpl.html'});
        $routeProvider
            .when('/', {template: `<home-component></home-component>`})
            .when('/search', {template: `<search-component></search-component>`})
            .when('/near', {templateUrl: 'src/views/near.tpl.html'})
            .when('/well/:wellId', {template: `<rd-well-show></rd-well-show>`});

    })
;

export { directionsAppModule };
