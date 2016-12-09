import angular from 'angular';
import { HomeConfig } from './home.config.js';
import { HomeController } from './home.controller.js';

export default angular.module('app.home', [])
                      .controller('HomeController', HomeController)
                      .config(HomeConfig)
                      .name;

