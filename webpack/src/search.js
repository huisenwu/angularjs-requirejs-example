define(['external/angular-register', './components/search'], function(register, Search) {
    if(register) {
        var dname = (register.dnames && register.dnames.search) || 'defaultSearch';
        register.app.directive(dname, ['reactDirective', function(reactDirective) {
            return reactDirective(Search);
        }]);
    }
});
