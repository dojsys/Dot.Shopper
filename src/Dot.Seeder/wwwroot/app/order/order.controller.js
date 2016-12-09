export default class OrderController 
{

    /*@ngInject;*/
    constructor($scope, $state, AppConstants, UserService) 
    {
        this.$scope = $scope;
        this.$state = $state;
        this.appName = AppConstants.appName;
        this.UserService = UserService;

        this.title = "Your Order";
        this.app_description = "Verify the customer's order.";
    
        if (!UserService.current) {
            UserService.ensureAuthIs(true);
        }

        this.logout = UserService.logout.bind(UserService);
    }
}