const path = require('path');

module.exports = {

    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, {
                test: /\.(gif|png|jpe?g|svg)$/i,

                use: ['file-loader']

            }, {

                test: /\.(eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        publicPath: "/",
                        outputPath: "assets/font/",
                    }
                }]
            },{

                test: /\.(csv|tsv)$/,
                use:[
                    'csv-loader'
                ]
            },{
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }

        ]
    }

};