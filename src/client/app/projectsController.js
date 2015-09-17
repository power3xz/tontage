angular
    .module('app')
    .controller('projectsCtrl', function($scope) {
        $scope.projects = [
            {title: 'Project 1'},
            {title: 'Project 2'},
            {title: 'Project 3'}
        ];

        $scope.addProject = function() {
            var num = $scope.projects.length + 1;
            $scope.projects.push({title: 'Project ' + num});
        };
    });
