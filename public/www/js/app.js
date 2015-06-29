(function(){

  // Ionic Starter App

  // angular.module is a global place for creating, registering and retrieving Angular modules
  // 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
  // the 2nd parameter is an array of 'requires'
  // 'starter.controllers' is found in controllers.js
  angular
    .module('dive', ['ionic', 'ui.router', 'ngCordova'])

    .run(function($ionicPlatform, $cordovaGeolocation, $http, geoLocation) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });
    })

    .config(function($stateProvider, $urlRouterProvider, $httpProvider) {
      $stateProvider

      .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "js/menu/menu.html",
        controller: 'MenuCtrl',
        data: {
          requireLogin: true
        }
      })

      .state('login', {
        url: "/login",
        templateUrl: "js/login/login.html",
        controller: 'LoginCtrl',
        data: {
          requireLogin: false
        }
      })

      .state('signup', {
        url: "/signup",
        templateUrl: "js/signup/signup.html",
        controller: 'SignupCtrl',
        data: {
          requireLogin: false
        }
      })

      .state('app.location', {
        url: "/location",
        views: {
          'menuContent': {
            templateUrl: "js/location/location.html",
            controller: 'LocationCtrl'
          }
        }
      })

      .state('app.main', {
        url: "/main",
        views: {
          'menuContent': {
            templateUrl: "js/main/main.html",
            controller: 'MainCtrl'
          }
        }
      });
      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/login');

      // the $httpProvider contains an array of interceptors.
      // an interceptor is simply a regular service factory that is registered to that array
      // here we are adding the interceptor created below to the $httpInterceptor.interceptors array
      $httpProvider.interceptors.push('AttachTokens');
    })
    // creates an interceptor to intercept a request
    // this method is called before $http send the request to the server
    .factory('AttachTokens', function($window){
      var attach = {
        request: function(object){
          // look in local storage to find the user's token
          var jwt = $window.localStorage.getItem('com.dive');
          // if found, adds it to the header so the server can validate the request
          if(jwt){
            object.headers['x-access-token'] = jwt;
          }
          // add the Access-Control-Allow-Origin header to the response requests
          // to allow cross-domain requests
          object.headers['Allow-Control-Allow-Origin'] = '*';
          return object;
        }
      };
      return attach;
    })
    .factory('geoLocation', function(){
      return {
        setGeolocation: function(latitude, longtitude){
          console.log("Latitude is,", latitude + ', ' + longtitude );
        }
      }
    })
    .run(function ($rootScope, $location, AuthFactory) {
      // we use .run to register work which should be performed when the injector is done loading all modules.
      // here we are implementing a listener on the $stateChangeStart event to track the next route navigation
      // we want to make sure the user is authorized
      // when it does change routes, we look for the token in localstorage
      // and send that token to the server to see if it is a real user or hasn't expired
      // if it's not valid, we then redirect back to login
      $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
        // check if the state requires a login as defined above
        var requireLogin = toState.data.requireLogin;
        // if the state requires a login and the user is not authorized, redirect back to login
        if (requireLogin && !AuthFactory.isAuthorized()) {
          $location.path('/login');
        }
      });
    });

})();
