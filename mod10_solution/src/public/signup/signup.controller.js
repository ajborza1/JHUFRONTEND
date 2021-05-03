(function (){

"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService'];

  function SignUpController(MenuService){
    var signup = this;

    signup.submitForm = function() {
        MenuService.getMenuItem(signup.user.shortName)
            .then(function(data) {
                signup.invalidShortName = false;
                signup.user.shortName = data;
                console.log(signup);
                MenuService.setUserInfo(signup.user);
                signup.saveUser = true;
            },
            function(errorMessage){
              signup.invalidShortName = true;
              signup.saveUser = false;
              console.log(errorMessage);
            }

          );
    }

  }
}());
