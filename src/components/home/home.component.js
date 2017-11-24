import { HomeController } from './home.controller';
import template from './home.html';

const homeComponent = {
    bindings: {
        initialData: '<',
    },
    controller: HomeController,
    template,
};

export { homeComponent }