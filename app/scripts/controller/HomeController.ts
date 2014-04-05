// Implement HomeController here. It should manage Home page.

/// <reference path="../refs.ts" />

module auction.controller {
    'use strict';

    import m = auction.model;
    import s = auction.service;

    interface IHomeScope extends ng.IScope {
        model: HomeController;
    }

    class HomeController {

            static $inject = ['$scope', 'productService'];

            public featuredProductItems: m.ProductModel[];

            constructor(private $scope: IHomeScope,
                        private productService: s.IProductService) {

                this.$scope.model = this;
                this.productService.getFeaturedProductItems()
                    .then((products) => this.featuredProductItems = products);
            }
        }

    angular.module('auctionApp').controller('HomeController', HomeController);
}

