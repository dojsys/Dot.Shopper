import angular from 'angular';
import HeaderController from './header.controller';
import FooterController from './footer.controller';
import {AppHeader} from './header.component';
import {AppFooter} from './footer.component';

export default angular.module('app.layout', [])
                      .controller('HeaderCtrl', HeaderController)
                      .controller('FooterCtrl', FooterController)
                      .component('appHeader', AppHeader)
                      .component('appFooter', AppFooter)
                      .name;
