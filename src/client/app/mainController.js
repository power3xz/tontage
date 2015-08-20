angular
    .module('app')
    .controller('mainCtrl', function($scope, $location) {
        $scope.toProjects = function() {
            $location.path('/projects');
        };
    });