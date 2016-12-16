export default class HeaderController {
    /*@ngInject;*/
    constructor($scope, AppConstants, UserService, CartService) {
        this.$scope = $scope;
        this.appName = AppConstants.appName;
        this.CartService = CartService;

        this.currentUser = UserService.current;
        this.logout = UserService.logout.bind(UserService);

        // this.$scope.cartItems = this.CartService.getCartCount();

        // this.$scope.$on("countOnChange", function(event, args) {

        //     event.currentScope.cartItems = args.message;
        //     console.log(args.message);
        // });

        //$scope.$watch("CartService.cart", (newValue, oldValue, scope) => {
        //this.cartItems = cart.length;
        //console.log(1);
        //}, true);

        $scope.$watch('UserService.current', (newUser) => {
            this.currentUser = newUser;
        });
    }
}