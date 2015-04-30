var webpack = require('webpack');

module.exports = {
    context: __dirname + '/src',
    entry: {
        "search": "./search.js",
        "hello": "./hello.js"
    },
    output: {
        filename: "[name].js",
        libraryTarget: "amd",
        path: __dirname + "/dist",
        sourceMapFilename: "[file].map"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'jsx-loader?insertPragma=React.DOM&harmony'
        }]
    },
    externals: {
         'external/react': "amd react",
         'external/react-bootstrap': "amd react-bootstrap",
         'external/angular-register': "amd angular-register"
    },
    plugins: [
        new webpack.OldWatchingPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ],
    debug: true,
    devtool: 'source-map'
};
