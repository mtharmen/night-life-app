'use strict';

var nightApp = angular.module('nightApp', ['ngRoute']);

// Factory
nightApp.factory('userFactory', function($http){
    
  var storedUser = { user: undefined };

  return {
        
    fetchUser: function() {
      return $http.get('/auth/user')
    },
    
    logout: function() {
      storedUser.user = undefined;
      window.location.href = '/logout';      
    }
  };
});

nightApp.factory('placesFactory', function($http){
    
  return {
    previous: function() {
      return $http.get('/api/previous')
    },

    lookUp: function(location) {
      return $http.get('/api/search/' + location)
    },

    optIn: function(barName, user) {
      return $http.post('/api/add/' + barName + '/' + user)
    },

    optOut: function(barName, user) {
      return $http.post('/api/remove/' + barName + '/' + user)
    }
  };
});

nightApp.config(function($routeProvider, $locationProvider) {
  // TODO: Figure out how to hide page until the $http requests are done
  $routeProvider
    .when('/', {
      templateUrl: 'partials/locationsList',
      controller: 'homeCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
    
    $locationProvider.html5Mode(true);
});

// Controllers
nightApp.controller('navCtrl', ['$scope', 'userFactory', function($scope, userFactory) {
    
  userFactory.fetchUser().then(
    function successCB (response) {
      $scope.user = response.data.user ? response.data.user.username : undefined;
      $scope.loaded = true;
    },
    function errorCB (response) {
      console.error(response.status + ':' + response.statusText);
  });

  $scope.login = function() {
    window.location.href = '/auth/twitter/';    
  };

  $scope.logout = function() {
    userFactory.logout()
  }
  
}]);

nightApp.controller('homeCtrl', ['$scope', 'placesFactory', function($scope, placesFactory) {
  
  $scope.center = "Where are you?"

  $scope.findPlaces = function(term) {

    $scope.searching = true;
    
    placesFactory.lookUp(term)
      .then(function(res) {
          if (res.data.term !== 'Where are you?') {
            $scope.bars = res.data.bars
            $scope.center = res.data.location
          }
          $scope.searching = false;
        }, function(res) {
          console.error(res)
        }
      )
  }

  $scope.opting = function(place) {
    if (!$scope.user) {
      alert('You need to be logged in to continue.')
    }
    else if (place.going) {
      place.people--
      place.going = false
      placesFactory.optOut(place.name, $scope.user)
        .then(function(res) {
          console.log('opted out')
        }, function(res) {
          console.error(res)
        }
      )
      console.log('Opting Out, telling server')
    } else {
      place.people++
      place.going = true
      placesFactory.optIn(place.name, $scope.user)
        .then(function(res) {
          console.log('opted in')
        }, function(res) {
          console.error(res)
        }
      )
      console.log('Opting In, telling server')
    }
  }

  $scope.external = function(url) {
    window.location.href = url
  }

  placesFactory.previous()
    .then(function(res) {
      if (res.data) {
        $scope.center = res.data
        $scope.findPlaces(res.data)
      }
    }, function(res) {
      console.error(res)
    })

  
}]);
