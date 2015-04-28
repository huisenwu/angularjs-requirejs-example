define(['angular', 'webpack/example/index-react', 'ngReact'], function (angular, Example) {
    angular.module('registerReactDirective', ['react'])
        .directive("exampleTest", ['reactDirective', function(reactDirective) {
            return reactDirective(Example.Test);
        }]);
});
