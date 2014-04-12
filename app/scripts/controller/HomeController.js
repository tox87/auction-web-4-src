// Implement HomeController here. It should manage Home page.
var auction;
(function (auction) {
    /// <reference path="../refs.ts" />
    (function (controller) {
        'use strict';

        var HomeController = (function () {
            function HomeController(productService) {
                var _this = this;
                this.productService = productService;
                this.productService.getFeaturedProductItems().then(function (products) {
                    return _this.featuredProductItems = products;
                });
            }
            HomeController.$inject = ['productService'];
            return HomeController;
        })();

        angular.module('auctionApp').controller('HomeController', HomeController);
    })(auction.controller || (auction.controller = {}));
    var controller = auction.controller;
})(auction || (auction = {}));
//# sourceMappingURL=HomeController.js.map
