// Use this file to *create* an AngularJS module for your app and configure $routeProvider.
/// <reference path="refs.ts" />
var auction;
(function (auction) {
    'use strict';

    angular.module('auctionApp', ['ngRoute']).config([
        '$routeProvider', function ($routeProvider) {
            $routeProvider.when('/home', {
                templateUrl: 'views/home.html',
                controller: 'HomeController',
                title: 'Auction'
            }).when('/search', {
                templateUrl: 'views/search.html',
                controller: 'SearchController',
                title: 'Search Products'
            }).when('/product/:productId', {
                templateUrl: 'views/details.html',
                controller: 'ProductDetailsController',
                title: 'Product Details'
            }).otherwise({
                redirectTo: '/home'
            });
        }]).run([
        '$rootScope', function ($rootScope) {
            $rootScope.$on('$routeChangeStart', function (event, next) {
                $rootScope.title = next.title;
            });
        }]);
})(auction || (auction = {}));
//# sourceMappingURL=app.js.map
