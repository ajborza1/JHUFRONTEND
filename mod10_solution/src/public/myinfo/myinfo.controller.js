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
