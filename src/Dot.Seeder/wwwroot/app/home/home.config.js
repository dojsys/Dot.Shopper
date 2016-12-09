export function HomeConfig($stateProvider, $httpProvider) {
    'ngInject';

    $stateProvider
    .state('app.home', {
        url: '/',
        controller: 'HomeController',
        controllerAs: '$ctrl',
        templateUrl: 'home/home.html',
        title: 'Home'
    });   
}
