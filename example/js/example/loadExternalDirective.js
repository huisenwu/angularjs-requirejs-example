define(['angular', 'webpack/example/index-angular', 'ngReact'], function (angular, Example) {
    angular.module('loadExternalDirective', ['react'])
        .config(function($compileProvider, $provide) {
            this.value = function(name, value) {
                $provide.value(name, value);
                return(this);
            };
            this.directive = function( name, factory ) {
                $compileProvider.directive( name, factory );
                return(this);
            };
            Example.registerDirective(this, 'Test');
        }).directive('loadExternal', function($compile) {
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
                    var attributes = scope.props ? ' ' + Object.keys(scope.props).map(function(prop) {
                        return ctrl.toDash(prop) + '=' + '"props.' + prop + '"';
                    }).join(' ') : '';

                    var html = '<' + scope.name + attributes + '/>';
                    var compiled = $compile(html)(scope);
                    elem.append(compiled);
                }
            };
        });
});
