class JWT {
    /*@ngInject;*/
    constructor(AppConstants, $window) 
    {
        this.AppConstants = AppConstants;
        this.$window = $window;
    }

    save(token) 
    {
        this.$window.localStorage[this.AppConstants.jwtKey] = token;
    }

    get() {
        return this.$window.localStorage[this.AppConstants.jwtKey];
    }

    destroy() 
    {
        this.$window.localStorage.removeItem(this.AppConstants.jwtKey);
    }
}
export default JWT;