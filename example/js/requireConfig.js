require.config({
    paths: {
        'angular': '../../bower_components/angular/angular',
        'jquery': '../../bower_components/jquery/dist/jquery',
        'text': '../../bower_components/text/text',
        'bootstrap': '../../bower_components/bootstrap/dist/js/bootstrap',
        'react': '../../bower_components/react/react-with-addons',
        'ngReact': '../../vendor/ngReact-with-transclude',
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
        'webpack': '../../webpack/dist'
    }
});

require(['startUp']);
