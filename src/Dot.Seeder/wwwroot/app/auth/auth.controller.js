export default class AuthCtrl {
    /*@ngInject;*/
    constructor($state, UserService) 
    {
        this.$state = $state;
        this.UserService = UserService;

        this.title = $state.current.title;
        this.authType = $state.current.name.replace('app.', '');
        this.formData = {};
        this.formData.username = "div";
        this.formData.email = "div@dojsystech.com";
        this.formData.password = "P@ssw0rd1";
    }

    submitForm() 
    {
        this.isSubmitting = true;

        this.UserService.attemptAuth(this.authType, this.formData).then(
          (res) => {
              this.$state.go('app.home', null, { reload: true });
          },
          (err) => {
              this.isSubmitting = false;
              this.errors = err.data.errors;
          }
        );
    }
}