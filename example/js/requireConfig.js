require.config({
    paths: {
        angular: '../../bower_components/angular/angular',
        jquery: '../../bower_components/jquery/dist/jquery',
        bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap',
        uiBootstrap: '../../bower_components/angular-bootstrap/ui-bootstrap-tpls'
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
