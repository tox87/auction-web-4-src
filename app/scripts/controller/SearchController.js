// Implement SearchController here. It should manage Search Results page.
var auction;
(function (auction) {
    /// <reference path="../refs.ts" />
    (function (controller) {
        'use strict';

        var SearchController = (function () {
            function SearchController($scope, productService) {
                var _this = this;
                this.$scope = $scope;
                this.productService = productService;
                this.$scope.model = this;
                this.productService.searchProductItems().then(function (products) {
                    return _this.searchProductItems = products;
                });
            }
            SearchController.$inject = ['$scope', 'productService'];
            return SearchController;
        })();

        angular.module('auctionApp').controller('SearchController', SearchController);
    })(auction.controller || (auction.controller = {}));
    var controller = auction.controller;
})(auction || (auction = {}));
//# sourceMappingURL=SearchController.js.map
