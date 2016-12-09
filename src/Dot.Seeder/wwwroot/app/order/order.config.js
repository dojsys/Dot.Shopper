export function OrderConfig($stateProvider, $httpProvider) {
    'ngInject';

    $stateProvider
    .state('app.order', {
        url: '/your-order',
        controller: 'OrderController',
        controllerAs: '$ctrl',
        templateUrl: 'order/order.html',
        title: 'Order'
    });   
}
