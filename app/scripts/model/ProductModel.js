// Implement "POJO" here to keep data of a single Product item.
var auction;
(function (auction) {
    (function (model) {
        'use strict';
        var ProductModel = (function () {
            function ProductModel() {
            }
            return ProductModel;
        })();
        model.ProductModel = ProductModel;
    })(auction.model || (auction.model = {}));
    var model = auction.model;
})(auction || (auction = {}));
//# sourceMappingURL=ProductModel.js.map
