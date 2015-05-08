define(['angular', 'react', 'webpack/index', 'text!common/registerConfig.json', 'ngReact'], function (angular, React, Example, conf) {
  var module = angular.module('directiveRegister', ['react']);
  var config = JSON.parse(conf);
  var prefix = config.prefix;
  var registerReactComponentsAsDirectives = function(Project) {
    Object.keys(Project).forEach(function(componentName) {
      var component = Project[componentName];
              if(component instanceof React.constructor) {
                module.value(componentName, component).directive(prefix+componentName, ["reactDirective", function(reactDirective) {
                  return reactDirective(componentName);
                }]);
              }
          });
      };
      registerReactComponentsAsDirectives(Example);
});
