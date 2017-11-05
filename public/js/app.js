'use strict';

var nightApp = angular.module('nightApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

// Factory
nightApp.factory('accountFactory', ['$http', '$window', '$location', function($http, $window, $location) {

  return {    
    fetchUser: function() {
      return $http.get('/auth/user');
    },

    twitterSignIn: function() {
      $window.location.href = '/auth/twitter';
      //return $http.post('/auth/twitter', user)
    },

    twitterUnlink: function(user) {
      return $http.get('/unlink/twitter');
    },
    
    logout: function() {
      $window.location.href = '/logout';      
    },

    redirect: function(path) {
      $location.url(path);
    }
  };
}]);


nightApp.factory('placesFactory', ['$http', '$location', function($http, $location){
    
  return {
    previous: function() {
      return $http.get('/api/previous');
    },

    lookUp: function(location) {
      return $http.get('/api/search/' + location);
    },

    optIn: function(barName, user) {
      return $http.post('/api/add/' + barName);
    },

    optOut: function(barName, user) {
      return $http.post('/api/remove/' + barName);
    },

    redirect: function(path) {
      $location.url(path);
    }
  };
}]);

nightApp.factory('modalFactory', ['$uibModal', function($uibModal) {
  
  return {    
    confirm: function(dialog, choose) {

      var choice = '';
      if (choose) {
        choice += '<button class="btn btn-primary col-xs-6" ng-click="confirm()">Okay</button>';
        choice += '<button class="btn btn-danger col-xs-6" ng-click="cancel()">Cancel</button>';
      } else {
        choice = '<button class="btn btn-primary col-xs-6 col-xs-offset-3" ng-click="confirm()">Okay</button>';
      }

      var modalOptions = {
        animation: true,
        template: '<div class="row" id="confirm-modal" style="padding-bottom: 30px">' +
                    '<div class="col-xs-10 col-xs-offset-1">' +
                      '<h3 style="text-align: center">' + dialog + '</h3>' +
                      '<br />' +
                    '</div>' +
                    '<div class="col-xs-10 col-xs-offset-1">' +
                      choice +
                    '</div>' +
                  '</div>',
        controller: ['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {
            $scope.confirm = function () {
              $uibModalInstance.close('yes');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
        }]
      };
      
      return $uibModal.open(modalOptions);
    }
  };
}]);

nightApp.config(function($routeProvider, $locationProvider) {
  // TODO: Figure out how to hide page until the $http requests are done
  $routeProvider
    .when('/', {
      templateUrl: 'partials/locationsList',
      controller: 'homeCtrl'
    })
    .when('/error', {
      templateUrl: 'partials/error',
      controller: 'homeCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
    
    $locationProvider.html5Mode(true);
});

// Controllers
nightApp.controller('navCtrl', ['$scope', '$location', 'accountFactory', 'modalFactory', function($scope, $location, accountFactory, modalFactory) {
   
  accountFactory.fetchUser().then(
    function successCB (response) {
      $scope.user = response.data.user;
      $scope.loaded = true;
    },
    function errorCB (response) {
      console.error(response.status + ':' + response.statusText);
      accountFactory.redirect('/error');
    });

  $scope.newUser = function () {
              
    var modalInstance = modalFactory.confirm('Sign in with Twitter?', true);
    
    modalInstance.result.then(
      function successCB () {
        accountFactory.twitterSignIn();        
      }, 
      function cancelCB () {
      }
    );
  };

  $scope.twitterUnlink = function() {
    var modalInstance = modalFactory.confirm('Unlink your Twitter account?', true);
    
    modalInstance.result.then(
      function successCB (user) {
        accountFactory.twitterUnlink().then(
          function successCB (response) {
            $scope.user = undefined;
            $location.url('/');
          },
          function cancelCB (response) {
            console.error(response.status + ':' + response.statusText);
            accountFactory.redirect('/error');
          });
        
      }, 
      function errorCB () {
      }
    );
  };

  $scope.logout = function() {
    var modalInstance = modalFactory.confirm('Logout?', true);
    
    modalInstance.result.then(
      function successCB (res) {
        accountFactory.logout();
      }, 
      function cancelCB () {
      }
    );
     
  };
  
}]);

nightApp.controller('homeCtrl', ['$scope', 'placesFactory', 'modalFactory', function($scope, placesFactory, modalFactory) {
  
  $scope.center = "Where are you?";

  $scope.findPlaces = function(term) {

    $scope.searching = true;
    
    placesFactory.lookUp(term)
      .then(function(res) {
          if (res.data.term !== 'Where are you?') {
            $scope.bars = res.data.bars;
            $scope.center = res.data.location;
          }
          $scope.searching = false;
        }, function(res) {
          console.error(res.status + ':' + res.statusText);
          placesFactory.redirect('/error');
        }
      );
  };

  $scope.opting = function(place) {
    if (!$scope.user) {
      var modalInstance = modalFactory.confirm('You need to be logged in continue');
    }
    else if (place.going) {
      place.people--;
      place.going = false;
      placesFactory.optOut(place.name, $scope.user)
        .then(function(res) {
        }, function(res) {
          console.error(res.status + ':' + res.statusText);
          placesFactory.redirect('/error');
        }
      );
    } else {
      place.people++;
      place.going = true;
      placesFactory.optIn(place.name, $scope.user)
        .then(function(res) {
        }, function(res) {
          console.error(res.status + ':' + res.statusText);
          placesFactory.redirect('/error');
        }
      );
    }
  };

  $scope.external = function(url) {
    window.location.href = url;
  };

  placesFactory.previous()
    .then(function(res) {
      if (res.data) {
        $scope.center = res.data;
        $scope.findPlaces(res.data);
      }
    }, function(res) {
      console.error(res.status + ':' + res.statusText);
      placesFactory.redirect('/error');
    });

  
}]);
