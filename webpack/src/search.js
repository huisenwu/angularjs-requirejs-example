define(['external/angular-register', './components/search', 'external/react'], function(register, Search, React) {
    if(register) {
        var dname = (register.dnames && register.dnames.search) || 'defaultSearch';
        register.app.directive(dname, ['reactDirective', function(reactDirective) {
            return reactDirective(Search);
        }]);
    } else {
        return {
            Component: Search,
            render: function(props, target) {
                React.render(React.createElement(Search, props), target);
            }
        };
    }
});
