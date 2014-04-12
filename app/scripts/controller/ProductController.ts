/// <reference path="../refs.ts" />

module auction.controller {
    'use strict';

    import m = auction.model;
    import s = auction.service;

    class ProductController {

        static $inject = ['$routeParams', 'productService'];

        public productItem: m.ProductModel;
        public showSearchForm: boolean = false;

        constructor(private $routeParams: any,
                    private productService: s.IProductService) {
            var productId: number = this.$routeParams.productId;
            this.productService.getProductById(productId)
                .then((item) => this.productItem = item);
        }

    /*
    todo: fix warning (by impl resolve?):
    Resource interpreted as Image but transferred with MIME type text/html: "http://localhost:9000/images/
    */

    }

    angular.module('auctionApp').controller('ProductController', ProductController);
}