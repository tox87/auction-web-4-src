/// <reference path="../refs.ts" />
var auction;
(function (auction) {
    (function (controller) {
        'use strict';

        var SearchParams = (function () {
            function SearchParams() {
                this.minPrice = 100;
                this.maxPrice = 1500;
            }
            return SearchParams;
        })();

        var SearchFormController = (function () {
            function SearchFormController($location, restangular) {
                this.$location = $location;
                this.restangular = restangular;
                this.searchParams = angular.extend(new SearchParams(), $location.search());
            }
            SearchFormController.prototype.search = function () {
                this.$location.search(this.searchParams);
                var products = this.restangular.all('products');
                products.getList(this.searchParams);
            };
            SearchFormController.$inject = ['$location', 'Restangular'];
            return SearchFormController;
        })();

        angular.module('auctionApp').controller('SearchFormController', SearchFormController);
    })(auction.controller || (auction.controller = {}));
    var controller = auction.controller;
})(auction || (auction = {}));
//# sourceMappingURL=SearchFormController.js.map
