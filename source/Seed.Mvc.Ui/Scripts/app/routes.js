﻿///<reference path="~/Scripts/lib/angular.js"/>
///<reference path="~/Scripts/lib/angular-ui-router.js"/>
///<reference path="~/Scripts/app/application.js"/>

'use strict';

angular.module('seedApp').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$urlMatcherFactoryProvider', '$httpProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactory, $httpProvider) {

        $stateProvider
            .state('dashboard',
                {
                    abstract: true,
                    templateUrl: '/Templates/views/dashboard.html',
                    controller: 'dashboardController'
                });

        $stateProvider.state('error', {
            url: '^/error/{errorCode}',
            templateUrl: '/Templates/views/error.html',
            controller: 'errorController',
            data: {
                title: 'Error'
            }
        });

        $urlRouterProvider.rule(function($injector, $location) {
            var path = $location.path();
            var normalized = path.toLowerCase();

            if (path != normalized) {
                $location.replace().path(normalized);
            }
        });

        $urlRouterProvider.otherwise('/error/404');

        $locationProvider.html5Mode(true);

        $httpProvider.interceptors.push('errorsInterceptor');
    }]);

angular.module('seedApp').run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
        $rootScope.title = toState.data.title;
    });
}]);