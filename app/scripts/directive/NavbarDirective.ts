/// <reference path="../refs.ts" />

'use strict';

angular.module('auctionApp')
    .directive('auctionNavbar', () => {
        return {
            scope: true,
            restrict: 'E',
            templateUrl: 'views/partial/navbar.html'
        };
    });

