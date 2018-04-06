var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpack = require('webpack')
var path = require("path");

var babelPolyfill = require('babel-polyfill');


module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
       path:path.resolve(__dirname, 'dist'),
       filename:'app.bundle.js',
       publicPath: '/'
    },
    devServer : {
       //contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,
        hot: true,
        historyApiFallback: true
       // stats: 'errors-only',
       // open : true
    },
    devtool: 'source-map',

    module: {
        rules:[
           
            {
                test:/\.css$/,
                use: ['css-loader', 'sass-loader']            
            },

            {
                test:/\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','sass-loader?indentedSyntax'],
                    publicPath: '/dist'
                    
                })
            },
            {
                test:/\.txt/,
                use: 'raw-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test:/\.jsx$/,
                exclude:/node_modules/,
                use: 'babel-loader'
            },
            {
                test:/\.(jpe?g|png|gif|svg)$/,
                use:'file-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=public/fonts/[name].[ext]'
            }
            
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            title: 'Webpack practice with ejs template',
            minify: {
                collapseWhitespace: true
            },
            hash: true, 
            template: './src/index.html'

        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new ExtractTextPlugin({
            filename: 'app.css',
            disable: false,
            allChunks: true
        })
    ]
};