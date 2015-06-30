(function () {
    var app = angular.module('gemStore', ['product-directives']);

    app.controller('StoreController', ['$http', function ($http) {
        //this.products = gems;
        var store = this;
        store.products = [];
        
        $http.get('js/store-products.json')
            .success(function (data, status, headers, config) {
                store.products = data;
                console.log('recievd 12');
                
            })
            .error(function (data, status, headers, config) {
                console.log('error 16');
                console.log(status );
                console.log(headers);
                console.log(config);
            });
    }]);


    app.controller('ReviewController', function() {
        this.reviews = {};
        this.addReview = function (product) {
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            //push review onto this product's review array
            this.review = {};
            // clear form by creating new empty object which is then immediately bound to blockquote preview

            // Note:  Had error caused by not passing product into addReview() method.
            // Caused this error: Unknown provider: productProvider <- product <- ReviewController

        };
    });



})();