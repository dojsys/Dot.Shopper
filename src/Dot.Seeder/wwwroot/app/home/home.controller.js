export class HomeController {

    /*@ngInject;*/
    constructor($scope, $state, AppConstants, UserService, CategoryService, ItemsService, CartService) {
        this.$scope = $scope;
        this.$state = $state;
        this.appName = AppConstants.appName;

        this.UserService = UserService;
        this.CartService = CartService;
        this.ItemsService = ItemsService;

        this.title = "Daddy's";
        this.title2 = "The place of the best pizza....";
        this.app_description = "Browse the menu of your favorite pizza...";

        this.items = ItemsService.getItems();
        this.cartItems = this.CartService.getCartCount();


        // this.$scope.$root.$on("countOnChange", function(event, args) {
        //     event.currentScope.$broadcast("countOnChange", args);
        // });

        this.$scope.$on("test", function(event, args) {
            alert("hello world");
        });
    }

    AddToCart(item) {
        var order = {
            Id: Math.random(),
            Pizza: item,
            Quantity: 1,
            Toppings : [],
            Total: item.Price
        };
        this.CartService.addToCart(order);
        this.cartItems = this.CartService.getCartCount();

        this.$scope.$broadcast("countOnChange", { message: this.cartItems });
    }
}