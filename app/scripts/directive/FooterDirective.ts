/// <reference path="../refs.ts" />

'use strict';

angular.module('auctionApp')
    .directive('auctionFooter', () => {
        return {
            scope: false,
            restrict: 'E',
            templateUrl: 'views/partial/footer.html'
        };
    });

