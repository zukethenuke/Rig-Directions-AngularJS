import angular from 'angular';
import ngRoute from 'angular-route';
// import mobileAngularUi from '../node_modules/mobile-angular-ui/dist/js/mobile-angular-ui.min.js';

const directionsAppModule = angular.module('directionsApp', ["ngRoute"])
    .config(function($routeProvider){
        $routeProvider.when('/', {templateUrl: 'src/views/home.tpl.html'});
        $routeProvider.when('/search', {templateUrl: 'src/views/search.tpl.html'});
        $routeProvider.when('/near', {templateUrl: 'src/views/near.tpl.html'});
    })
    .controller('mainController', function() {

    })
;

export { directionsAppModule };
