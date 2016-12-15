export class HomeController 
{

    /*@ngInject;*/
    constructor($scope, $state, AppConstants, UserService, CategoryService) 
    {
        this.$scope = $scope;
        this.$state = $state;
        this.appName = AppConstants.appName;
        this.UserService = UserService;

        this.title = "Daddy's";
        this.title2 = "The place of the best pizza....";
        this.app_description = "Browse the menu of your favorite pizza...";    

        this.categoryNodes = CategoryService.getCategories();
    }
}