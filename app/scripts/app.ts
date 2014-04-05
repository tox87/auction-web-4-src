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

    angular.module('auctionApp', ['ngRoute'])
        .config(['$routeProvider', ($routeProvider: ng.route.IRouteProvider) => {
            $routeProvider
                .when('/home', {
                    templateUrl: 'views/home.html',
                    controller: 'HomeController',
                    title: 'Auction'
                })
                .when('/search', {
                    templateUrl: 'views/search.html',
                    controller: 'SearchController',
                    title: 'Search Products'
                })
                .when('/product/:productId', {
                    templateUrl: 'views/details.html',
                    controller: 'ProductDetailsController',
                    title: 'Product Details'
                })
                .otherwise({
                    redirectTo: '/home'
                });
        }])
        .run(['$rootScope',($rootScope: IAuctionRootScope) => {
            $rootScope.$on('$routeChangeStart', (event: any, next: IAuctionRoute) => {
                $rootScope.title = next.title;
            });
        }]);
}