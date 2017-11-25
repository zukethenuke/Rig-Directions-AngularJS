import { RdListItemComponent } from './rd-list-item.component';

const rdListItemModule = angular
    .module('rdListItemModule', [])
    .component('rdListItem', RdListItemComponent)
    .name;

export { rdListItemModule };
