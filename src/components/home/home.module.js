import { homeComponent } from './home.component';
import { rdListModule } from '../rd-list';
import { rdListItemModule } from '../rd-list-item';

const homeModule = angular
    .module('homeModule', [rdListModule, rdListItemModule])
    .component('homeComponent', homeComponent)
    .name;

export { homeModule };