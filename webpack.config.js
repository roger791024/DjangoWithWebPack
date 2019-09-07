var path = require('path');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    context: path.resolve(__dirname, 'assets/js'),
    entry: {
        index: './index.jsx'
    },
    output: {
        path: path.resolve('./assets/webpack_bundles/'),
        filename: "[name]-[hash].js"
    },
    plugins: [
        new BundleTracker({filename: './webpack-stats.json'})
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env','@babel/preset-react']
                    }
                }
            }
        ]
    }
}