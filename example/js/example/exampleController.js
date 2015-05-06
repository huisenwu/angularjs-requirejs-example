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

            //this.dname = "portal-search";
            //this.names = ['Joe', 'Dan', 'Mike', 'James'];
            this.hello = "Hello World!";
            this.updateHello = function() {
              console.log("updateHello called");
              if(this.hello === "Hello World!") {
                this.hello = "Hi World!";
              } else {
                this.hello = "Hello World!";
              }
            };
        });
});
