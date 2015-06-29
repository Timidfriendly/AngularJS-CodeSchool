(function () {
    var app = angular.module('product-directives', []);

    app.directive('productGallery', function () {
        return {
            restrict: "E",
            templateUrl: "directives/product-gallery.html",
            replace: true,
            controller: function () {
                this.current = 0;
                this.setCurrent = function(imageNumber) {
                    if (imageNumber == null) {
                        this.current = 0;
                    } else {
                        this.current = imageNumber;
                    }
                };
            },
            controllerAs: "gallery"
        };
    });

    app.directive('productTabs', function () {
        return {
            restrict: "E",
            templateUrl: "directives/product-tabs.html",
            replace: true,
            controller: function () {
                this.tab = 3;
                this.setTab = function (tabToSet, $event) {
                    this.tab = tabToSet;
                    $event.preventDefault();
                };
                this.isSet = function (tabIsSet) {
                    if (this.tab === tabIsSet) {
                        return true;
                    }
                };
            },
            controllerAs: "panel"
        };
    });

    app.directive("productSpec", function(){
        return {
            restrict: "E",
            replace: true, // replace custom element with div
            templateUrl : "directives/product-spec.html"
        };
    });

    app.directive("productReview", function () {
        return {
            restrict: "E",
            replace: true,
            templateUrl: 'directives/product-review.html'
        }
    });

    app.directive("myCustomAttrDirective", function () {
        return {
            strict: "A",
            replace: true,
            templateUrl: "directives/my-custom-attr-directive.html"
        };
    });










})();