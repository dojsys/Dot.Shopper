export default class OrderController 
{

    /*@ngInject;*/
    constructor($scope, $state, AppConstants, UserService, CartService) 
    {
        this.$scope = $scope;
        this.$state = $state;
        this.appName = AppConstants.appName;
        this.UserService = UserService;
        this.CartService = CartService;

        this.title = "Your Order";
        this.app_description = "Verify the customer's order.";

        this.orders = this.CartService.getCart();
        this.total = 0;
    
        // if (!UserService.current) {
        //     UserService.ensureAuthIs(true);
        // }

        //this.logout = UserService.logout.bind(UserService);
    }
}