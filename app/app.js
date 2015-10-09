'use strict';

require('./libraries.js');

angular.module('app', [
    'ui.router',
    require('bower/angular-bootstrap/index.js')
])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('base', _.extend(require('views/base/base.js'), {
                abstract: true
            }))
            .state('base.home', _.extend(require('views/home/home.js'), {
                url: '/'
            }));
    });