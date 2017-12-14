import { RdHomeComponent } from './rd-home.component';
import { RdListModule } from '../rd-list';
import { RdListItemModule } from '../rd-list-item';
import './rd-home.css';

const RdHomeModule = angular
    .module('RdHomeModule', [RdListModule, RdListItemModule])
    .component('rdHome', RdHomeComponent)
    .name;

export { RdHomeModule };