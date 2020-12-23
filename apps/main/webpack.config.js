const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 3000
    },
    output: {
        publicPath: 'auto'
    },
    devtool: 'cheap-module-source-map',
    target: 'web',
    module: {
        rules: [
            {
                test: /bootstrap\.js$/,
                loader: "bundle-loader",
                options: {
                  lazy: true,
                },
            },
            {
                test: /\.[jt]sx?/i,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css?/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                ],
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "app1",
            remotes: {
                'app2': "app2@http://localhost:3001/remoteEntry.js",
            },
            shared: { react: { singleton: true, eager: true }, "react-dom": { singleton: true, eager: true } },
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.template.html'),
        }),
    ]
}
