
// Anthony Borza
// Due Date: 5/10/2021
// myinfo.controller.js: handles displays
// user info

(function (){

angular.module('public')
.controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['MenuService', 'ApiPath']
  function MyInfoController( MenuService, ApiPath){

    var myInfo = this;
    myInfo.userInfo = MenuService.getUserInfo();
    myInfo.urlPath = ApiPath;
    console.log(myInfo);

  }
})();
