import { rdButtonComponent } from './rd-button.component';
import './rd-button.css';

const rdButtonModule = angular
    .module('rdButtonModule', [])
    .component('rdButton', rdButtonComponent)
    .name;

export { rdButtonModule };
