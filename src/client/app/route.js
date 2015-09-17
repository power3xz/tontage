angular
    .module('app')
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'src/client/main.html',
                controller: 'mainCtrl'
            })
            .when('/projects', {
                templateUrl: 'src/client/projects/projects.html',
                controller: 'projectsCtrl'
            })
            .when('/ide', {
                templateUrl: 'src/client/ide/ide.html',
                controller: 'IDECtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
