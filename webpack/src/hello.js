define(['external/angular-register', './components/hello'], function(register, Hello) {
    if(register) {
        var dname = (register.dnames && register.dnames.hello) || 'defaultHello';
        register.app.directive(dname, ['reactDirective', function(reactDirective) {
            return reactDirective(Hello, null, {transclude: true});
        }]);
    }
});
