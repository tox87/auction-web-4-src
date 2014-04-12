// Implement SearchController here. It should manage Search Results page.

/// <reference path="../refs.ts" />

module auction.controller {
    'use strict';

    import m = auction.model;
    import s = auction.service;

    class SearchController {

        static $inject = ['productService'];
        searchProductItems: m.ProductModel[];
        lowPrice: number;
        highPrice: number;

        constructor(private productService: s.IProductService) {
            this.productService.searchProductItems()
                .then((products) => this.searchProductItems = products);
        }
    }

    angular.module('auctionApp').controller('SearchController', SearchController);

}