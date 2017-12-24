angular.module('pornoite')
.config(function ($stateProvider, $urlRouterProvider) {
    // setup states
    $stateProvider
            .state('app', {
                url : '/app',
                templateUrl : 'partials/menu.html',
                abstract: true,
            })
            .state('login', {
                url: "/login",
                templateUrl: "partials/login.html",
                controller: 'loginCtrl'
            })
            .state('app.map', {
                url : '/map',
                views : {
                    'menuContent' : {
                        templateUrl: "partials/map.html",
                        controller: 'mapCtrl'
                    }
                }
            })
            .state('app.dashboard', {
                url : '/dashboard',
                views : {
                    'menuContent' : {
                        templateUrl: "partials/dashboard.html",
                        controller: 'dashboardCtrl'
                    }
                }
            })
            .state('app.details', {
                url : '/details',
                views : {
                    'menuContent' : {
                        templateUrl: "partials/details.html",
                    }
                }
            });
    // default route
    $urlRouterProvider.otherwise("/login");

});
