const path = require('path');

module.exports = {
    entry: './src/app.js',
    //entry: './src/playground/redux-expense.js',
    //entry: './src/playground/destructuring.js',
    //entry: './src/playground/hoc.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_module/
        }, {
            test: /\.s?css$/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
          }]
    },
    devtool: 'cheap-module-eval-source-map',
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};

