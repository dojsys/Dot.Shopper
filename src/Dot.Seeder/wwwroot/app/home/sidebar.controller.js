export default class SideBarController {
    /*@ngInject;*/
    constructor($scope, AppConstants, CategoryService, CartService) {
        this.$scope = $scope;
        this.appName = AppConstants.appName;
        this.selectedCategory = [];
        this.CartService = CartService;

        this.categoryNodes = CategoryService.getCategories();
        this.$scope.cartItems = this.CartService.getCartCount();

        this.InitSelectedCategory();

        this.$scope.$on("countOnChange", function(event, args) {

            event.currentScope.cartItems = args.message;
            console.log(args.message);
        });
    }

    InitSelectedCategory() {
        let count = this.categoryNodes.Nodes.length;

        for (let i = 0; i < count; i++) {
            this.selectedCategory[this.categoryNodes.Nodes[i].Id] = 0;
        }
    }

    OnSelectChange(parentId, Id, homeCtrl) {
        this.selectedCategory[parentId] = Id;
        this.$scope.$emit("test", {message : "hellow"});
    }
}