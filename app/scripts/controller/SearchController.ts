// Implement SearchController here. It should manage Search Results page.

/// <reference path="../refs.ts" />

module auction.controller {
    'use strict';

    import m = auction.model;
    import s = auction.service;

    interface ISearchScope extends ng.IScope {
        model: SearchController;
    }

    class SearchController {

        static $inject = ['$scope', 'productService'];

        public searchProductItems: m.ProductModel[];

        constructor(private $scope: ISearchScope,
                    private productService: s.IProductService) {

            this.$scope.model = this;
            this.productService.searchProductItems()
                .then((products) => this.searchProductItems = products);
        }

    }

    angular.module('auctionApp').controller('SearchController', SearchController);

}