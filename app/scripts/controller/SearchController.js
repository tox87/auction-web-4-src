// Implement SearchController here. It should manage Search Results page.
var auction;
(function (auction) {
    /// <reference path="../refs.ts" />
    (function (controller) {
        'use strict';

        var SearchController = (function () {
            function SearchController(productService) {
                var _this = this;
                this.productService = productService;
                this.productService.searchProductItems().then(function (products) {
                    return _this.searchProductItems = products;
                });
            }
            SearchController.$inject = ['productService'];
            return SearchController;
        })();

        angular.module('auctionApp').controller('SearchController', SearchController);
    })(auction.controller || (auction.controller = {}));
    var controller = auction.controller;
})(auction || (auction = {}));
//# sourceMappingURL=SearchController.js.map
