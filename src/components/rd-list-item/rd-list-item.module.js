import { RdListItemComponent } from './rd-list-item.component';

const RdListItemModule = angular
    .module('rdListItemModule', [])
    .component('rdListItem', RdListItemComponent)
    .name;

export { RdListItemModule };
