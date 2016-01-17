module.exports = {
    context: __dirname + "/app",
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:8080',
        'webpack/hot/only-dev-server',
        './app.jsx',
    ],
    devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
    output: {
        filename: "app.js",
        path: __dirname + "/dist",
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['react-hot', 'babel'],
            },
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]',
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader",
            },
            {
                test: /\.png/,
                loader: "url-loader?limit=10000&mimetype=image/png",
            },
        ],
    },
    devServer: {
        contentBase: "./dist",
        noInfo: true,
        hot: true,
        inline: true
    }
};