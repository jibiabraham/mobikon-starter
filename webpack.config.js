var ngAnnotatePlugin = require('ng-annotate-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: 'sourcemap',
    output: {
        filename: 'bundle.js',
        path: __dirname + "/dist"
    },
    module: {
        loaders: [
            {test: /\.html$/, loader: 'raw'},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!sass-loader?outputStyle=expanded&sourceMap=map")},
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.(png|svg|jpg|gif)([\?#].*)?$/, loader: "url?limit=1000&name=[path][name]-[hash].[ext]"},
            {test: /\.(ttf|otf|woff|woff2|eot)([\?#].*)?$/, loader: "file?name=[path][name]-[hash].[ext]"}
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
        alias: {
            'npm': __dirname + '/node_modules',
            'bower': __dirname + '/bower_components',
            'views': __dirname + '/app/views'
        }
    },
    plugins: [
        new ExtractTextPlugin("style.css", {
            allChunks: true
        })
    ]
};
