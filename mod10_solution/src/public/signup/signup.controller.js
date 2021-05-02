(function (){

"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService){
  var signup = this;
  signup.firstName = '';
  signup.lastName = '';
  signup.email = '';
  signup.phone = '';
  signup.shortName = '';


  var userInfo = {
     firstName : signup.firstName,
     lastName : signup.lastName,
     email : signup.email,
     phone : signup.phone,
     shortName : signup.shortName,
     item : signup.item
  };

  signup.submitForm = function(userForm) {
      if(userForm.$invalid) {
          console.log('The form is not valid');
          return;
      }
      MenuService.getMenuItem(signup.shortName)
          .then(function(data) {
              userInfo.item = data;
              console.log(userInfo);
              MenuService.setUserInfo(userInfo);
              signup.saved = true;
          });
  }
}
}());

//     var signup = this;
//     signup.firstName = "";
//     signup.lastName = "";
//     signup.email = "";
//     signup.phone = "";
//     signup.shortName = "";
//     signup.requiredFields = true;
//
//     var userInfo = {
//        firstName : signup.firstName,
//        lastName : signup.lastName,
//        email : signup.email,
//        phone : signup.phone,
//        shortName : signup.shortName,
//        item : signup.item
//     };
//
//     signup.submitform = new function(userForm){
//       if(userForm.$invalid){
//         console.log("form invalid");
//         return;
//       }
//
//       MenuService.getMenuItem(signup.shortName)
//       .then(response =?{
//         console.log(data);
//         var favItem =
//         UserService.setUserInfo(userInfo);
//         console.log(userInfo);
//       });
//     }
// }

//})();



    // reg.formInfo = {};
    // reg.firstName = "";
    // reg.lastName = "";
    // reg.email = "";
    // reg.phone = "";
    // reg.shortName = "";

    //   if(!$scope.formInfo.firstName){
    //     $scope.firstName = 'First Name Required';
    //   }
    //   if(!$scope.formInfo.lastName){
    //     $scope.lastName = 'Last Name Required';
    //   }
    //   if(!$scope.formInfo.email){
    //     $scope.email = 'Email Required';
    //   }
    //   if(!$scope.formInfo.phone){
    //     $scope.phone = 'Phone Number Required';
    //   }
    //   if(!$scope.formInfo.shortName){
    //     $scope.shortName = 'Short Name Required';
    //   }
    // };


    // variables for SignUpController


  // var user = [{
  //   'First Name': signup.firstName,
  //   'Last Name': signup.lastName,
  //   'Email': signup.email,
  //   'Phone': signup.phone
  // }];
