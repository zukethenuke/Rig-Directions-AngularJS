import { RdWellShowComponent } from './rd-well-show.component';
import { getWellFactory } from './rd-well-show.factory';

const rdWellShowModule = angular
    .module('rdWellShowModule', [])
    .factory('getWellFactory', getWellFactory)
    .component('rdWellShow', RdWellShowComponent)
    .config(function($routeProvider){
        $routeProvider
            .when('/well/:wellId', {
                template: `<rd-well-show></rd-well-show>`,
                resolve: function() {
                    console.log('hello from resolve', this.wellId);
                    this.$http.get('https://mysterious-wildwood-62874.herokuapp.com/api/wells/' + this.wellId)
                        .then((response) => {
                            resolveWell = response.data.well[0];
                        }, (response) => {
                            console.log('http error', response);
                        })
                }
            })

    })
    .name;

export { rdWellShowModule };
