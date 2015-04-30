define(['external/angular-register', './components/hi'], function(register, Hi) {
    if(register) {
        var dname = (register.dnames && register.dnames.hi) || 'defaultHi';
        register.app.directive(dname, ['reactDirective', function(reactDirective) {
            return reactDirective(Hi);
        }]);
    }
});
