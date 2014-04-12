/// <reference path="../refs.ts" />

'use strict';

angular.module('auctionApp')
    .directive('searchForm', () => {
        return {
            scope: true,
            restrict: 'E',
            templateUrl: 'views/partial/searchForm.html'
        };
    });