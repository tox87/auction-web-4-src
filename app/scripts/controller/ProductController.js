/// <reference path="../refs.ts" />
var auction;
(function (auction) {
    (function (controller) {
        'use strict';

        var ProductController = (function () {
            function ProductController($routeParams, productService) {
                var _this = this;
                this.$routeParams = $routeParams;
                this.productService = productService;
                this.showSearchForm = false;
                var productId = this.$routeParams.productId;
                this.productService.getProductById(productId).then(function (item) {
                    return _this.productItem = item;
                });
            }
            ProductController.$inject = ['$routeParams', 'productService'];
            return ProductController;
        })();

        angular.module('auctionApp').controller('ProductController', ProductController);
    })(auction.controller || (auction.controller = {}));
    var controller = auction.controller;
})(auction || (auction = {}));
//# sourceMappingURL=ProductController.js.map
