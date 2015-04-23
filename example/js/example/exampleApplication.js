define(['angular', 'example/exampleController', 'webpack/example/index-angular', 'example/loadExternalDirective'], function(angular) {
    angular.module('exampleApp', ['exampleController', 'chtrExampleApplication', 'loadExternalDirective']);
});
