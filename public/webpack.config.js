const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const config = {
    entry: ['./js/index.jsx', './css/style.scss'],
    output: {
        filename: 'dist/bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'dist/[name].bundle.css',
            allChunks: true
        })
    ]
};

module.exports = config;