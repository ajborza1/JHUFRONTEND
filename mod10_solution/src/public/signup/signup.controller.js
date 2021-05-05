
// Anthony Borza
// Due Date: 5/10/2021
// signup.controller.js: handles business logic
// and validation for a new user signing up for
// the website newsletter

(function (){
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService'];
  function SignUpController(MenuService){
    var signup = this;

     // define this to reference in html
     // and peform logic for getting shortName
     // handle exceptions
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
