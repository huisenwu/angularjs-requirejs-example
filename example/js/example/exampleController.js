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

            this.name = 'chtr-example-test';

            this.propTest = function() {
                console.log('Pass function directly successfully!');
            };

            this.props = {
                propTest: function() {
                    console.log('Pass function from dynamic directive successfully!');
                }
            };
        });
});
