'use strict';

// Declare app level module which depends on views, and components
var hexagon = angular.module('hexagon',[
  'ngRoute',
  'ui.router',
  'ui.bootstrap',
  'picardy.fontawesome'
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

.config([
  '$urlRouterProvider',
  function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('hexagon');
  }
])

.controller('hexagonCtrl', [
  '$scope',
  function ($scope) {
    $scope.header = ['Home', 'About', 'Works', 'Services', 'Blog', 'Contact'];

    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
      var newWidth = 600 + slides.length + 1;
      slides.push({
        image: '//placekitten.com/' + newWidth + '/300',
        text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
          ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
      });
    };
    for (var i = 0; i < 4; i++) {
      $scope.addSlide();
    }
  }
]);
