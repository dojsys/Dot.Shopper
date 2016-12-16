export default class CartService {
    constructor($filter) 
    {
        this.$filter = $filter;
        this.cart = [];
    }

    getCart() {
        return this.cart;
    }

    getCartCount() {
        return this.cart.length;
    }

    addToCart(item) {
        var pizzaItem = this.$filter('filter')(this.cart, { Id: item.Id })[0];
        var index = this.cart.indexOf(item);
        var isNew = angular.isUndefined(pizzaItem);
        if (!isNew) {
            this.cart[index].Quantity += 1;
        } else {
            this.cart.push(item);
        }
    }
}
