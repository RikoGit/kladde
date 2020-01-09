const { join } = require('path');

const { HotModuleReplacementPlugin } = require('webpack');

const isDev = process.env.NODE_ENV === 'development';
const rootDir = join(__dirname, '..');
const staticDir = join(rootDir, 'static');
const buildDir = join(staticDir, 'build');

module.exports = {
    entry: [...(isDev ? ['webpack-hot-middleware/client'] : []), './src/client.jsx'],
    devtool: isDev ? 'inline-source-map' : undefined,
    mode: isDev ? 'development' : 'production',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    optimization: {
        noEmitOnErrors: true,
    },
    output: {
        filename: 'main.js',
        path: buildDir,
        publicPath: '/',
    },
    plugins: [...(isDev ? [new HotModuleReplacementPlugin()] : [])],
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
};
