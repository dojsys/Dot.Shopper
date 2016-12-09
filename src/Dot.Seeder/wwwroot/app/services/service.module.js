﻿import angular from 'angular';
import JWT from './jwt.service.js';
import UserService from './user.service.js';

// Create the module where our functionality can attach to
export default angular.module('app.services', [])
                      .service('JWT', JWT)
                      .service('UserService', UserService)
                      .name;
