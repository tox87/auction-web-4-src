// Implement HomeController here. It should manage Home page.

/// <reference path="../refs.ts" />

module auction.controller {
    'use strict';

    import m = auction.model;
    import s = auction.service;

    class HomeController {

        static $inject = ['productService'];
        featuredProductItems: m.ProductModel[];

        constructor(private productService: s.IProductService) {
           this.productService.getFeaturedProductItems()
               .then((products) => this.featuredProductItems = products);
        }
    }

    angular.module('auctionApp').controller('HomeController', HomeController);
}