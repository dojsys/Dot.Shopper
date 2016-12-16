export default class PizzaController 
{

    /*@ngInject;*/
    constructor($scope, $state, $filter, AppConstants, UserService, CartService, PizzaService) 
    {
        this.$scope = $scope;
        this.$state = $state;
        this.$filter = $filter;
        this.appName = AppConstants.appName;
        this.UserService = UserService;
        this.CartService = CartService;
        this.PizzaService = PizzaService;

        this.title = "Pizza Shit";
        this.app_description = "Description Shit";

        this.pizza = this.PizzaService.getPizza($state.params.pizzaId);
        this.toppings = [
            { Id: 0, Name: "Tilapia", Price: 5.25 },
            { Id: 1, Name: "Siling Labuyo", Price: 1.99 },
            { Id: 2, Name: "Bangus", Price: 20.00 },
            { Id: 3, Name: "Ice Cream", Price: 7.36 },
            { Id: 4, Name: "Malunggay", Price: 1.00 },
            { Id: 5, Name: "Cheese", Price: 5.25 },
            { Id: 6, Name: "Whole Lechon", Price: 100.00 }
        ];

        this.order = {
            Pizza: this.pizza,
            Quantity: 1,
            Toppings : [],
            Total: this.pizza.Price
        };
    }

    AddToCart(item) {
        this.CartService.addToCart(item);
        this.cartItems = this.CartService.getCartCount();
    }

    AddRemoveTopping(topping) {
        var index = this.order.Toppings.indexOf(topping);
        if (index < 0) {
            this.order.Toppings.push(topping);
            this.order.Total += topping.Price * this.order.Quantity;
        }
        else {
            this.order.Toppings.splice(index, 1);     
            this.order.Total -= topping.Price * this.order.Quantity;
        }
    }

    AddActive(topping) {
        return angular.isUndefined(this.$filter('filter')(this.order.Toppings, { Id: topping.Id })[0]) ? '' : 'active';
    }

    UpdateTotal() {
        this.order.Total = this.order.Pizza.Price * this.order.Quantity;
    }
}