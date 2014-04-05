/// <reference path="../refs.ts" />

module auction.controller {
    'use strict';

    import m = auction.model;
    import s = auction.service;

    interface IProductDetailsScope extends ng.IScope {
        model: ProductDetailsController;
    }

    class ProductDetailsController {

        static $inject = ['$scope','productService'];

        public productItem: m.ProductModel;

        constructor(private $scope: IProductDetailsScope,
                    private productService: s.IProductService) {

            this.$scope.model = this;
//            var productId: number = this.$routeParams.productId;
//            this.productItem = this.productService.getProductById(productId);
            this.productItem = <m.ProductModel> {
                "id"          : 2,
                "title"       : "Unit 2",
                "thumb"       : "01-2.jpg",
                "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore adipiscing elit. Ut enim.",
                "timeleft"    : 2,
                "watchers"    : 3,
                "price"       : 43
            }
        }
    }

    angular.module('auctionApp').controller('ProductDetailsController', ProductDetailsController);
}