require.config({
    paths: {
        'angular': '../../bower_components/angular/angular',
        'jquery': '../../bower_components/jquery/dist/jquery',
        'bootstrap': '../../bower_components/bootstrap/dist/js/bootstrap',
        'react': '../../bower_components/react/react-with-addons',
        'ngReact': '../../bower_components/ngReact/ngReact',
        'react-bootstrap': '../../bower_components/react-bootstrap/react-bootstrap'
    },
    shim: {
        angular: {
            exports: 'angular',
            deps: ['jquery']
        },
        jquery: {
            exports: 'jquery'
        },
        bootstrap: {
            deps: ['jquery']
        }
    }
});

require.config({
    'paths': {
        'webpack/example': '/static/example/0.0'
    }
});

require(['startUp']);
