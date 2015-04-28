define(['angular'], function(angular) {
    angular.module('exampleController', [])
        .controller('ExampleController', function() {
            this.tab = 1;

            this.setTab = function (tabId) {
                this.tab = tabId;
            };

            this.isSet = function (tabId) {
                return this.tab === tabId;
            };
        });
});
