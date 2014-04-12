// This file should contain ProductService implementation which is responsible for managing products.
// All other parts of the app shouldn't access data/*.json files directly, instead they should use this service.

// Leverage as many TypeScript features (classes, type annotations, lambdas, etc.)
// as you can (and as it seems reasonable to you ;))

/// <reference path="../refs.ts" />

module auction.service {
    'use strict';

    import m = auction.model;

    export interface IProductService {
        getFeaturedProductItems(): ng.IPromise<m.ProductModel[]>;
        searchProductItems(): ng.IPromise<m.ProductModel[]>;
        getProductById(productId: number): ng.IPromise<m.ProductModel>;
    }

    class ProductService implements IProductService {

        static $inject = ['$http', '$q'];

        constructor(private $http: ng.IHttpService,
                    private $q: ng.IQService) {}

        public getFeaturedProductItems(): ng.IPromise<m.ProductModel[]> {

            var featuredProductItems = this.$q.defer<m.ProductModel[]>();
            this.$http.get('data/featured.json')
                .success((data) => featuredProductItems.resolve(<m.ProductModel[]> data.items))
                .error(() => console.log("failed to get featured products"));
            return featuredProductItems.promise;

        }

        public searchProductItems(): ng.IPromise<m.ProductModel[]> {

        var searchProductItems = this.$q.defer<m.ProductModel[]>();
        this.$http.get('data/search.json')
              .success((data) => searchProductItems.resolve(<m.ProductModel[]> data.items))
              .error(() => console.log("failed to search products"));
          return searchProductItems.promise;

        }

        public getProductById(productId: number): ng.IPromise<m.ProductModel> {
          return this.searchProductItems().then(productItems =>  _.find(productItems,
                  (p:m.ProductModel) => p.id == productId));
        }

      }

    angular.module('auctionApp').service('productService', ProductService);
}