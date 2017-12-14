import { RdButtonComponent } from './rd-button.component';
import './rd-button.css';

const RdButtonModule = angular
    .module('rdButtonModule', [])
    .component('rdButton', RdButtonComponent)
    .name;

export { RdButtonModule };
