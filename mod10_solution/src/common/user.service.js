(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

function UserService(){
  var service = this;
  var newUser;

  // sets the userInfo
  service.setUserInfo = function(userInfo){
   service.newUser = userInfo;
  }

  // returns userInfo
  service.getUserInfo = function(){
    return service.newUser;
  }
}
})();
