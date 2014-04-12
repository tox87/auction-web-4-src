/// <reference path="../refs.ts" />

module auction.controller {
    'use strict';

    import m = auction.model;
    import s = auction.service;

    class SearchParams {
        title       : string;
        category    : number;
        minPrice    : number = 100;
        maxPrice    : number = 1500;
        maxCloseDate: Date;
        numOfBids   : number;
    }

    class SearchFormController {

        static $inject = ['$location', 'Restangular'];

        searchParams: SearchParams;

        constructor(private $location: ng.ILocationService,
                    private restangular: Restangular) {
            this.searchParams = angular.extend(new SearchParams(), $location.search());
        }

        search() {
            this.$location.search(this.searchParams);
            var products = this.restangular.all('products');
            products.getList(this.searchParams);
        }
    }

    angular.module('auctionApp').controller('SearchFormController', SearchFormController);

}