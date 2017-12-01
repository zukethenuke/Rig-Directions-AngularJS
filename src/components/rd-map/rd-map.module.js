import { RdMapComponent } from './rd-map.component';
import { RdMapController } from './rd-map.controller';

const rdMapModule = angular
    .module('rdMapModule', [])
    .controller('RdMapController', RdMapController)
    .component('rdMap', RdMapComponent)
    .config(function($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
          // Allow same origin resource loads.
          'self',
          // Allow loading from our assets domain.  Notice the difference between * and **.
          'https://www.google.com/maps/**'
    ])})    
    .name;

export { rdMapModule };
