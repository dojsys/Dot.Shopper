export default function ConfigRoutes($urlRouterProvider, $stateProvider, $locationProvider) {
    "ngInject";

    $stateProvider
         .state('app', {
             templateUrl: 'layout/app.html',
             abstract: true
         });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
}













