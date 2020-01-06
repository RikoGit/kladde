const { join } = require('path');

const rootDir = join(__dirname, '..');
const staticDir = join(rootDir, 'static');

module.exports = {
    entry: './src/client.jsx',
    mode: 'production',
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
    output: {
        filename: 'main.js',
        path: staticDir,
    },
};
