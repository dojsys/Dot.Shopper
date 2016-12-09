class UserService {
    /*@ngInject;*/
    constructor(JWT, AppConstants, $http, $state, $q) 
    {
        'ngInject';

        this.JWT = JWT;
        this.AppConstants = AppConstants;
        this.$http = $http;
        this.$state = $state;
        this.$q = $q;
    }

    attemptAuth(type, credentials) 
    {
        let route = type === 'login' ? '/login' : '';

        return this.$http({
            url: this.AppConstants.api + '/token' + route,
            method: 'POST',
            data: credentials
        }).then((res) => {
            this.JWT.save(res.data.access_token);
            this.current = res.data.user;
            return res;
        });
    }

    update(fields) 
    {
        return this.$http({
            url:  this.AppConstants.api + '/user',
            method: 'PUT',
            data: { user: fields }
        }).then((res) => {
            this.current = res.data.user;
            return res.data.user;
        }
        );
    }

    login() 
    {
        this.$state.go('app.login');
    }

    logout() 
    {
        this.current = null;
        this.JWT.destroy();
        this.$state.go(this.$state.$current, null, { reload: true });
    }

    verifyAuth() 
    {
        let deferred = this.$q.defer();

        // check for JWT token
        if (!this.JWT.get()) {
            deferred.resolve(false);
            return deferred.promise;
        }

        if (this.current) {
            deferred.resolve(true);
        } else {
            this.$http({
                url: this.AppConstants.api + '/token',
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + this.JWT.get()
                }
            }).then((res) => {
                this.current = res.data.ticket.principal.identity.name;
                deferred.resolve(true);
            },
              (err) => {
                  console.log("verifyAuth: err");
                  console.log(err);

                  this.JWT.destroy();
                  deferred.resolve(false);
              }
            );
        }

        return deferred.promise;
    }

    ensureAuthIs(bool) 
    {
        let deferred = this.$q.defer();

        this.verifyAuth().then((authValid) => {
            if (authValid !== bool) {
                this.$state.go('app.login');
                deferred.resolve(false);
            } else {
                deferred.resolve(true);
            }
        });

        return deferred.promise;
    }
}
export default UserService;