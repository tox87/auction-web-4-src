/// <reference path="../refs.ts" />
'use strict';
angular.module('auctionApp').directive('futureDate', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue) {
                var inputDate, todayDate;

                // empty field. this is OK
                if (!viewValue) {
                    ctrl.$setValidity('futureDate', true);
                    return;
                }

                // unparsable date
                inputDate = Date.parse(viewValue);
                if (isNaN(inputDate) || inputDate < 0) {
                    ctrl.$setValidity('futureDate', false);
                    return viewValue;
                }

                // valid date, but in the past
                todayDate = new Date();
                if (inputDate < todayDate) {
                    ctrl.$setValidity('futureDate', false);
                    return viewValue;
                }

                // future date
                ctrl.$setValidity('futureDate', true);
                return viewValue;
            });
        }
    };
});
//# sourceMappingURL=FutureDateDirective.js.map
