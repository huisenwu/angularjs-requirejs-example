define(['external/angular-register', './components/hello', 'external/react'], function(register, Hello, React) {
    if(register) {
        var dname = (register.dnames && register.dnames.hello) || 'defaultHello';
        register.app.directive(dname, ['reactDirective', function(reactDirective) {
            return reactDirective(Hello);
        }]);
    } else {
        return {
            Component: Hello,
            render: function(props, target) {
                React.render(React.createElement(Hello, props), target);
            }
        };
    }
});
