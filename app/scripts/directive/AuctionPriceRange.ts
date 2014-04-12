/// <reference path="../refs.ts" />

angular.module('auctionApp').directive('auctionPriceRange',
    ['$timeout', ($timeout) => <ng.IDirective> {
        scope: {
            minPrice: '@',
            maxPrice: '@',
            lowPrice: '=',
            highPrice: '='
        },
        restrict: 'E',
        templateUrl: 'views/partial/priceRange.html',
        link: function (scope: any, el, attrs) {

            var slider: any = angular.element(el).find('#product-price-slider'),
                min: number = parseInt(scope.minPrice || 0),
                max: number = parseInt(scope.maxPrice || 500),
                low: number = parseInt(scope.lowPrice || min),
                high: number = parseInt(scope.highPrice || max);


            //Initialize Slider
            slider.slider({min: min, max: max, value: [low, high]});

            //Slider -> numeric fields
            slider.on('slideStop', (e) => {
                scope.$apply(() => {
                    if (scope.lowPrice != e.value[0]) scope.lowPrice = e.value[0];
                    if (scope.highPrice != e.value[1]) scope.highPrice = e.value[1];
                });
            });

            //Numeric fields -> slider
            var curVal = () => slider.slider('getValue');
            var setSlider = (lo, hi) => slider.slider('setValue', [lo, hi]);
            scope.$watch('lowPrice', (newVal) => setSlider(newVal, curVal()[1]));
            scope.$watch('highPrice', (newVal) => setSlider(curVal()[0], newVal));
        }
    }]);