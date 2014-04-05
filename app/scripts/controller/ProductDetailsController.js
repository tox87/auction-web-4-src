/// <reference path="../refs.ts" />
var auction;
(function (auction) {
    (function (controller) {
        'use strict';

        var ProductDetailsController = (function () {
            function ProductDetailsController($scope, productService) {
                this.$scope = $scope;
                this.productService = productService;
                this.$scope.model = this;

                //            var productId: number = this.$routeParams.productId;
                //            this.productItem = this.productService.getProductById(productId);
                this.productItem = {
                    "id": 2,
                    "title": "Unit 2",
                    "thumb": "01-2.jpg",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore adipiscing elit. Ut enim.",
                    "timeleft": 2,
                    "watchers": 3,
                    "price": 43
                };
            }
            ProductDetailsController.$inject = ['$scope', 'productService'];
            return ProductDetailsController;
        })();

        angular.module('auctionApp').controller('ProductDetailsController', ProductDetailsController);
    })(auction.controller || (auction.controller = {}));
    var controller = auction.controller;
})(auction || (auction = {}));
//# sourceMappingURL=ProductDetailsController.js.map
