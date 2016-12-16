export function PizzaConfig($stateProvider, $httpProvider) {
    'ngInject';

    $stateProvider
    .state('app.pizza', {
        url: '/pizza/:pizzaId',
        controller: 'PizzaController',
        controllerAs: '$ctrl',
        templateUrl: 'pizza/pizza.html',
        title: 'Pizza'
    });   
}
