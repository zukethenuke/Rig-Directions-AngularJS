import { RdHomeComponent } from './rd-home.component';
import { RdListModule } from '../rd-list';
import { RdListItemModule } from '../rd-list-item';
import { rdCurrentLocationFactory } from './rd-home.factory';

import './rd-home.css';

const RdHomeModule = angular
    .module('RdHomeModule', [RdListModule, RdListItemModule])
    .component('rdHome', RdHomeComponent)
    .factory('rdCurrentLocationFactory', rdCurrentLocationFactory)
    .name;

export { RdHomeModule };