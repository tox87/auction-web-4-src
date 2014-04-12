// Use this file to *create* an AngularJS module for your app and configure $routeProvider.

/// <reference path="refs.ts" />

module auction {
    'use strict';

    interface IAuctionRootScope extends ng.IRootScopeService {
        title: string;
    }

    interface IAuctionRoute extends ng.route.IRoute {
        title: string;
    }

    angular.module('auctionApp', ['ngRoute', 'restangular'])
        .config(['$routeProvider', ($routeProvider: ng.route.IRouteProvider) => {
            $routeProvider
                .when('/home', {
                    templateUrl: 'views/home.html',
                    controller: 'HomeController',
                    controllerAs: 'ctrl',
                    title: 'Auction'
                })
                .when('/search', {
                    templateUrl: 'views/search.html',
                    controller: 'SearchController',
                    controllerAs: 'ctrl',
                    title: 'Search Products'
                })
                .when('/product/:productId', {
                    templateUrl: 'views/product.html',
                    controller: 'ProductController',
                    controllerAs: 'ctrl',
                    title: 'Product Details'
//                  todo: impl ProductController.resolve
                })
                .otherwise({
                    redirectTo: '/home'
                });
        }])
        .config(['RestangularProvider', (RestangularProvider) => {
            RestangularProvider.setBaseUrl('/rest/v1');
        }])
        .run(['$rootScope',($rootScope: IAuctionRootScope) => {
            $rootScope.$on('$routeChangeStart', (event: any, next: IAuctionRoute) => {
                $rootScope.title = next.title;
            });
        }]);
}