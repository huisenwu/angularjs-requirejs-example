define(['angular', 'react'], function(angular, React) {
    angular.module('exampleController', [])
        .controller('ExampleController', function() {
            this.tab = 1;

            this.setTab = function (tabId) {
                this.tab = tabId;
            };

            this.isSet = function (tabId) {
                return this.tab === tabId;
            };

            /*this.dname = "ui-search";
            this.names = ['Joe', 'Dan', 'Mike', 'James'];
            this.hello = "Hello World!";
            this.updateHello = function() {
              if(this.hello === "Hello World!") {
                this.hello = "Hi World!";
              } else {
                this.hello = "Hello World!";
              }
            };*/

            this.styles = ['primary','success','info','warning','danger','link'];
            this.test = 'Test';
            this.updateTest = function() {
              this.test = 'Tested';
            };
            this.disabled = true;
            this.size = ['large', 'small', 'xsmall'];
            this.block = true;
            this.title = 'Dropdown';
            this.yes = true;

            this.panel = {
              titles: ['Panel heading without title', React.createElement('h3', null, 'Panel Title')],
              head: ['Panel 1', 'Panel 2'],
              foot: 'Panel footer',
              events:[1, 2]
            };
        });
});
