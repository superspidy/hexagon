'use strict';

// Declare app level module which depends on views, and components
var hexagon = angular.module('hexagon',[
  'ngRoute',
  'ui.router'
])


/**
 * Config
 */

.config([
  '$stateProvider',
  function ($stateProvider) {

    $stateProvider.state(
      'hexagon', {
        url: '/hexagon',
        templateUrl: 'hexagon/hexagon.html',
        controller: 'hexagonCtrl'
      }
    );

}])

.controller('hexagonCtrl', function () {

});
