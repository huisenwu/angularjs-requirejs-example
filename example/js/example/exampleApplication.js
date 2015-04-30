define(['angular',
        'angular-register',
        'common/directiveLoader',
        'example/exampleController',
        'example/exampleConfig'],
    function(angular) {
        angular.module('exampleApp', ['exampleController',
                                    'directiveLoader',
                                    'directiveRegister']);
});
