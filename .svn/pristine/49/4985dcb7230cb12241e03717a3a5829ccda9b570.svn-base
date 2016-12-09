export default class HeaderController 
{
    /*@ngInject;*/
    constructor($scope, AppConstants, UserService) 
    {
        this.appName = AppConstants.appName;
        
        this.currentUser = UserService.current;
        this.logout = UserService.logout.bind(UserService);

        $scope.$watch('UserService.current', (newUser) => {
            this.currentUser = newUser;
        });    
    }
}
