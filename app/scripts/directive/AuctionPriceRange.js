/// <reference path="../refs.ts" />
angular.module('auctionApp').directive('auctionPriceRange', [
    '$timeout', function ($timeout) {
        return {
            scope: {
                minPrice: '@',
                maxPrice: '@',
                lowPrice: '=',
                highPrice: '='
            },
            restrict: 'E',
            templateUrl: 'views/partial/priceRange.html',
            link: function (scope, el, attrs) {
                var slider = angular.element(el).find('#product-price-slider'), min = parseInt(scope.minPrice || 0), max = parseInt(scope.maxPrice || 500), low = parseInt(scope.lowPrice || min), high = parseInt(scope.highPrice || max);

                //Initialize Slider
                slider.slider({ min: min, max: max, value: [low, high] });

                //Slider -> numeric fields
                slider.on('slideStop', function (e) {
                    scope.$apply(function () {
                        if (scope.lowPrice != e.value[0])
                            scope.lowPrice = e.value[0];
                        if (scope.highPrice != e.value[1])
                            scope.highPrice = e.value[1];
                    });
                });

                //Numeric fields -> slider
                var curVal = function () {
                    return slider.slider('getValue');
                };
                var setSlider = function (lo, hi) {
                    return slider.slider('setValue', [lo, hi]);
                };
                scope.$watch('lowPrice', function (newVal) {
                    return setSlider(newVal, curVal()[1]);
                });
                scope.$watch('highPrice', function (newVal) {
                    return setSlider(curVal()[0], newVal);
                });
            }
        };
    }]);
//# sourceMappingURL=AuctionPriceRange.js.map
