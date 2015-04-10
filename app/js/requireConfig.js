require.config({
    paths: {
        angular: '../lib/angular/angular',
        jquery: '../lib/jquery/dist/jquery',
        bootstrap: '../lib/bootstrap/dist/js/bootstrap',
        uiBootstrap: '../lib/angular-bootstrap/ui-bootstrap-tpls'
    },
    shim: {
        angular: {
            exports: 'angular',
            deps: ['jquery']
        },
        jquery: {
            exports: 'jquery'
        },
        uiBootstrap: {
            deps: ['angular']
        },
        bootstrap: {
            deps: ['jquery']
        }
    }
});

require(['start']);
