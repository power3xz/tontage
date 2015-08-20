angular
    .module('app')
    .controller('rootCtrl', function($scope, $location) {
        $location.path('/main');
    });