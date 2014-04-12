// Use this file to *create* an AngularJS module for your app and configure $routeProvider.
/// <reference path="refs.ts" />
var auction;
(function (auction) {
    'use strict';

    angular.module('auctionApp', ['ngRoute', 'restangular']).config([
        '$routeProvider', function ($routeProvider) {
            $routeProvider.when('/home', {
                templateUrl: 'views/home.html',
                controller: 'HomeController',
                controllerAs: 'ctrl',
                title: 'Auction'
            }).when('/search', {
                templateUrl: 'views/search.html',
                controller: 'SearchController',
                controllerAs: 'ctrl',
                title: 'Search Products'
            }).when('/product/:productId', {
                templateUrl: 'views/product.html',
                controller: 'ProductController',
                controllerAs: 'ctrl',
                title: 'Product Details'
            }).otherwise({
                redirectTo: '/home'
            });
        }]).config([
        'RestangularProvider', function (RestangularProvider) {
            RestangularProvider.setBaseUrl('/rest/v1');
        }]).run([
        '$rootScope', function ($rootScope) {
            $rootScope.$on('$routeChangeStart', function (event, next) {
                $rootScope.title = next.title;
            });
        }]);
})(auction || (auction = {}));
//# sourceMappingURL=app.js.map
