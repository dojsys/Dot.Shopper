import angular from 'angular';
import { OrderConfig } from './order.config.js';
import OrderController from './order.controller.js';

export default angular.module('app.order', [])
                      .controller('OrderController', OrderController)
                      .config(OrderConfig)
                      .name;

