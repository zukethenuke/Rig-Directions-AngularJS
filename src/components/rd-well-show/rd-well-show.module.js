import { RdWellShowComponent } from './rd-well-show.component';
import { getWellFactory } from './rd-well-show.factory';
import { RdWellShowController } from './rd-well-show.controller'; 

const rdWellShowModule = angular
    .module('rdWellShowModule', [])
    .factory('getWellFactory', getWellFactory)
    .component('rdWellShow', RdWellShowComponent)
    .config(function ($routeProvider){
        $routeProvider
            .when('/well/:wellId', {
                template: `<rd-well-show></rd-well-show>`,
                // controller: RdWellShowController,
                // controllerAs: 'vm',
                resolve: {
                    well: function($http, $route) {
                        // return $http.get('http://localhost:3000/api/wells/' + $route.current.params.wellId)
                        return $http.get('https://mysterious-wildwood-62874.herokuapp.com/api/wells/' + $route.current.params.wellId)
                        .then((response) => {
                                console.log('hello from resolve get', response.data.well[0]);
                                return response.data.well[0];
                            }, (response) => {
                                console.log('resolve http error', response);
                            });
                    },
                }
            })

    })
    .name;

export { rdWellShowModule };
