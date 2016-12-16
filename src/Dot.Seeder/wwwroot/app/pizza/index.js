import angular from 'angular';
import { PizzaConfig } from './pizza.config.js';
import PizzaController from './pizza.controller.js';

export default angular.module('app.pizza', [])
                      .controller('PizzaController', PizzaController)
                      .config(PizzaConfig)
                      .name;

