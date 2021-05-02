(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  var userInfo = {};

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  // get shortName associated with signup
  service.getMenuItem = function(shortName){
    var config = {};
    if(shortName){
        config.params = {'shortName': shortName};
    }
    console.log(ApiPath + '/menu_items/' + config + '.json');
    return $http.get(ApiPath + '/menu_items/' + config + '.json').then(function (response){
      return response.data;
    });
  };

  // set the user myInfo
  service.setUserInfo = function(userInfoData){
    service.userInfo = userInfoData;
    console.log(userInfo);
  }

  // get the user info
  service.getUserInfo = function(){
    return service.userInfo;
      console.log(userInfo);
  }
}



})();
