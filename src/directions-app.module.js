import angular from 'angular';
import ngRoute from 'angular-route';
import { searchModule } from './components/search';
// import mobileAngularUi from '../node_modules/mobile-angular-ui/dist/js/mobile-angular-ui.min.js';

const directionsAppModule = angular.module('directionsAppModule', ["ngRoute", searchModule])
    .config(function($routeProvider){
        $routeProvider.when('/', {templateUrl: 'src/views/home.tpl.html'});
        $routeProvider.when('/search', {template: `<search></search>`});
        $routeProvider.when('/near', {templateUrl: 'src/views/near.tpl.html'});
    })
    // .controller('mainController', function() {

    // })
;

export { directionsAppModule };
