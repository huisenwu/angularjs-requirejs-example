define(['angular', 'text!common/registerConfig.json', 'ngReact'], function (angular, conf) {
    return {
        app: angular.module('directiveRegister', ['react']),
        dnames: JSON.parse(conf).dnames
    };
});
