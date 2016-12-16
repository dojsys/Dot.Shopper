import angular from 'angular';
import JWT from './jwt.service.js';
import UserService from './user.service.js';
import CategoryService from './category.service.js';
import ItemsService from './items.service.js';
import CartService from './cart.service.js';
import PizzaService from './pizza.service.js';
import ItemCategories from './itemCategories.service.js';

// Create the module where our functionality can attach to
export default angular.module('app.services', [])
                      .service('JWT', JWT)
                      .service('UserService', UserService)
                      .service('CategoryService', CategoryService)
                      .service('ItemsService', ItemsService)
                      .service('CartService', CartService)
                      .service('PizzaService', PizzaService)
                      .service('ItemCategories', ItemCategories)
                      .name;
