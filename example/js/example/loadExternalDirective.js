define(['angular'], function (angular) {
    angular.module('loadExternalDirective', [])
        .directive('loadExternal', function($compile) {
            return {
                restrict: 'E',
                scope: {
                	name: '=',
                    props: '='
                },
                controller: function($scope) {
                    this.toDash = function(str) {
                        return str.replace(/([A-Z])/g, function($1){return "-"+$1.toLowerCase();});
                    };
                },
                link: function(scope, elem, attrs, ctrl) {
                    //console.log("postLink scope: " + scope.name);
                    //console.log("postLink before processing: " + elem[0].outerHTML);

                    var attributes = scope.props ? ' ' + Object.keys(scope.props).map(function(prop) {
                        return ctrl.toDash(prop) + '=' + '"props.' + prop + '"';
                    }).join(' ') : '';

                    var html = '<' + scope.name + attributes + '/>';
                    var compiled = $compile(html)(scope);
                    elem.append(compiled);
                    //console.log("postLink after processing: " + elem[0].outerHTML);
                }
            };
        });
});
