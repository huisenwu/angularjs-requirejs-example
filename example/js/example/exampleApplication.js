define(['angular', 'example/exampleController', 'example/registerReactDirective', 'example/loadDynamicDirective'], function(angular) {
    angular.module('exampleApp', ['exampleController', 'registerReactDirective', 'loadDynamicDirective']);
});
