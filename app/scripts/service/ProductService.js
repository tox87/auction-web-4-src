// This file should contain ProductService implementation which is responsible for managing products.
// All other parts of the app shouldn't access data/*.json files directly, instead they should use this service.
var auction;
(function (auction) {
    // Leverage as many TypeScript features (classes, type annotations, lambdas, etc.)
    // as you can (and as it seems reasonable to you ;))
    /// <reference path="../refs.ts" />
    (function (service) {
        'use strict';

        var ProductService = (function () {
            function ProductService($http, $q) {
                this.$http = $http;
                this.$q = $q;
            }
            ProductService.prototype.getFeaturedProductItems = function () {
                var featuredProductItems = this.$q.defer();
                this.$http.get('data/featured.json').success(function (data) {
                    return featuredProductItems.resolve(data.items);
                }).error(function () {
                    return console.log("failed to get featured products");
                });
                return featuredProductItems.promise;
            };

            ProductService.prototype.searchProductItems = function () {
                var searchProductItems = this.$q.defer();
                this.$http.get('data/search.json').success(function (data) {
                    return searchProductItems.resolve(data.items);
                }).error(function () {
                    return console.log("failed to search products");
                });
                return searchProductItems.promise;
            };

            ProductService.prototype.getProductById = function (productId) {
                return this.searchProductItems().then(function (productItems) {
                    return _.find(productItems, function (p) {
                        return p.id == productId;
                    });
                });
            };
            ProductService.$inject = ['$http', '$q'];
            return ProductService;
        })();

        angular.module('auctionApp').service('productService', ProductService);
    })(auction.service || (auction.service = {}));
    var service = auction.service;
})(auction || (auction = {}));
//# sourceMappingURL=ProductService.js.map
