angular
    .module('app')
    .config(function($routeProvider) {
        $routeProvider
            .when('/main', {
                templateUrl: 'src/client/main.html',
                controller: 'mainCtrl'
            })
            .when('/projects', {
                templateUrl: 'src/client/projects.html',
                controller: 'projectsCtrl'
            })
            .otherwise({
                redirectTo: '/main'
            });
    });