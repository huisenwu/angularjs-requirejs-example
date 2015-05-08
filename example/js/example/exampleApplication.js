define(['angular',
        'common/directiveRegister',
        'common/directiveLoader',
        'example/exampleController'],
    function(angular) {
        angular.module('exampleApp', ['exampleController',
                                    'directiveLoader',
                                    'directiveRegister']);
});
