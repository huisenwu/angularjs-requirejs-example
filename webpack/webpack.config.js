var webpack = require('webpack');

module.exports = {
    context: __dirname + '/src',
    entry: {
        "index": "./index.js"
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
         'react': "amd react"
         //'external/react-bootstrap': "amd react-bootstrap"
    },
    plugins: [
        new webpack.OldWatchingPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ],
    debug: true,
    devtool: 'source-map'
};
