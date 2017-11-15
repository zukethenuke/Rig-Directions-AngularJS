import angular from 'angular';
import ngRoute from 'angular-route';
import { searchModule } from './components/search';
import { homeModule } from './components/home';
// import mobileAngularUi from '../node_modules/mobile-angular-ui/dist/js/mobile-angular-ui.min.js';

const directionsAppModule = angular.module('directionsAppModule', ["ngRoute", searchModule, homeModule])
    .config(function($routeProvider){
        // $routeProvider.when('/', {templateUrl: 'src/views/home.tpl.html'});
        $routeProvider.when('/', {template: `<home-component></home-component>`});
        $routeProvider.when('/search', {template: `<search-component></search-component>`});
        $routeProvider.when('/near', {templateUrl: 'src/views/near.tpl.html'});
    })
;

export { directionsAppModule };
