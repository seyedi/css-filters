var app = angular.module('cssFilters', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$timeout', '$mdSidenav', '$mdUtil', function($scope, $timeout, $mdSidenav, $mdUtil){

  $scope.closeRight = function() {
    $mdSidenav('right').close()
  };

  $scope.openRight = function() {
    $mdSidenav('right').open()
  };

  $scope.showCard = function(card) {    
    var allcards = document.querySelectorAll('.mycard');

    angular.forEach(allcards, function(item) {
      item.classList.remove('show');
    });

    var selected = document.querySelector('#'+card);
    selected.classList.add('show');
  };

}]);
    