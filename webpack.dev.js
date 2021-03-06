const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');


module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        compress: true,
        port: 9000,
        hot: true,
        clientLogLevel: 'none',
        noInfo: true,
        overlay: true
    },
    plugins:[
         new webpack.HotModuleReplacementPlugin()
    ],
    
});