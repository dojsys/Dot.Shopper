import angular from 'angular';
import { HomeConfig } from './home.config.js';
import { HomeController } from './home.controller.js';
import SideBarController from './sidebar.controller';
import { AppSideBar } from './sidebar.component';

export default angular.module('app.home', [])
    .controller('HomeController', HomeController)
    .controller('SideBarCtrl', SideBarController)
    .component('appSideBar', AppSideBar)
    .config(HomeConfig)
    .name;