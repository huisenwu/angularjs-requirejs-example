define(['angular', 'example/exampleController', 'webpack/example/index-angular', 'example/externalDirective'], function(angular) {
    angular.module('exampleApp', ['exampleController', 'chtrExampleApplication', 'externalDirective']);
});
