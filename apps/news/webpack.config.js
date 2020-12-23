const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback: true,
        port: 3001
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
            name: "app2",
            library: { type: "var", name: "app2" },
            filename: "remoteEntry.js",
            exposes: {
                "./NewsApp": "./src/App",
            },
            shared: { react: { singleton: true, eager: true }, "react-dom": { singleton: true, eager: true } },
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.template.html'),
        })
    ]
}
