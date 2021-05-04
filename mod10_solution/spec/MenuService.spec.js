describe("menu", function(){

  var menu, $httpBackend, ApiPath;

  // a before each is defined here to setup module
  beforeEach(function () {
    module('common');

    // sets up the before each to mock the following
    // items below so it behaves like the acutal services.
    inject(function ($injector) {
      menu = $injector.get('MenuService');
      $httpBackend = $injector.get('$httpBackend');
      ApiPath = $injector.get('ApiPath');
    });
  });

  //test for menu item with NL1 to see if it exists.
  // test should pass because item NL1 does exist
  it('return short name for NL1', function(){
    $httpBackend.whenGET(ApiPath + '/menu_items/NL1.json').respond(['Vegetable Lo Mein']);
      menu.getMenuItem('NL1').then(function(response){
        expect(response).toEqual(['Vegetable Lo Mein']);
      });
    $httpBackend.flush();
  });

  //checks to see if AAAQ item does not exist and throws 500
  // exception
  it('return item does not exist', function(){
    $httpBackend.whenGET(ApiPath + '/menu_items/AAAQ.json').respond(500, 'error')
      menu.getMenuItem('AAAQ').then(function(response){
        expect(response.status).toEqual(500, 'error');
      });
    $httpBackend.flush();
  });

});
