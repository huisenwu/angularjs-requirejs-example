define(['angular'], function (angular) {
    angular.module('externalDirective', [])
        .directive('externalDirective', function($compile) {
            return {
                restrict: 'E',
                scope: {
                	name: '='
                },
                link: function(scope, elem) {
                    console.log("postLink scope: " + scope.name);
                    console.log("postLink before processing: " + elem[0].outerHTML);
                    var html = '<' + scope.name + '/>';
                    var compiled = $compile(html)(scope);
                    elem.append(compiled);
                    console.log("postLink after processing: " + elem[0].outerHTML);
                }
            };
        });
});
