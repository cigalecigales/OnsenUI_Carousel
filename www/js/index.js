var app = ons.bootstrap('Carousel', ['onsen']);

app.controller("CarouselController", ['$scope', function($scope) {

    $scope.items = [{
        name: "java",
        carousel: "carousel01",
        status: 0
    }, {
        name: "swift",
        carousel: "carousel02",
        status: 1
    }, {
        name: "ruby",
        carousel: "carousel03",
        status: 1
    }, {
        name: "javascript",
        carousel: "carousel04",
        status: 0
    }, {
        name: "c#",
        carousel: "carousel05",
        status: 1
    }];

    $scope.click = function(idx) {
        var carousel_name = $scope.items[idx].carousel;
        this[carousel_name].setActiveCarouselItemIndex(0);
    }

    $scope.bad = function(idx) {
        $scope.items.splice(idx, 1);
    }

    $scope.normal = function(idx) {
        var carousel_name = $scope.items[idx].carousel;
        $scope.items[idx].status = 0;
        this[carousel_name].setActiveCarouselItemIndex(1);
    }

    $scope.good = function(idx) {
      var carousel_name = $scope.items[idx].carousel;
      $scope.items[idx].status = 1;
      this[carousel_name].setActiveCarouselItemIndex(1);
    }
}]);

app.directive('status', function($compile) {
    var _status = [{
        name: "Normal",
        css: "normal"
    }, {
        name: "Good",
        css: "good"
    }];

    return {
        restrict: "AE",
        replace: true,
        scope: {
            current_status: "=currentStatus"
        },
        link: function($scope, element, attrs) {
            $scope.$watch("current_status", function() {
              var name = _status[$scope.current_status].name;
              var css = _status[$scope.current_status].css;

              var html = '<div><div class="' + css + '">' + name + '</div></div>';
              var el = $compile(html)($scope);
              element.html(el.html());
            });
        }
    };
});
