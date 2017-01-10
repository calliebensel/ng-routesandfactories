var myApp = angular.module( 'myApp', [ "ngRoute" ] );

myApp.config([ "$routeProvider", function( $routeProvider ){
console.log( 'ing config' );
  $routeProvider
    .when( "/home", {
      templateUrl: 'views/routes/home.html',
      controller: 'HomeController'
    })
    .when( "/koolaid", {
      templateUrl: 'views/routes/koolaid.html',
      controller: 'KoolaidController'
    })
    .when( "/patrickstar", {
      templateUrl: 'views/routes/patrickstar.html',
      controller: 'PatrickstarController'
    })
    .when( "/strongbad", {
      templateUrl: 'views/routes/strongbad.html',
      controller: 'StrongbadController'
    })
    .otherwise({
      redirectTo: "home"
    });
}]); // end $routeProvider

myApp.controller( 'HomeController', [ '$scope', function( $scope ){
  console.log( 'NG is working, in home' );
}]); // end HomeController

myApp.controller( 'KoolaidController', [ '$scope', function( $scope ){
  console.log( 'in Kool Aid Man' );
}]); // end koolaid controller

myApp.controller( 'StrongbadController', [ '$scope', function( $scope ){
  console.log( 'in Strong Bad' );
}]); // end koolaid controller

myApp.controller( 'PatrickstarController', [ '$scope', function( $scope ){
  console.log( 'in Patrick Star' );
}]); // end koolaid controller
