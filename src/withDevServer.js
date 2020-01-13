import { createRequire } from 'module';

export default server => {
    const require = createRequire(import.meta.url);

    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');

    const config = require('../configs/webpack.config.js');

    const compiler = webpack(config);

    server.use(
        webpackDevMiddleware(compiler, {
            publicPath: config.output.publicPath,
        }),
    );
    server.use(webpackHotMiddleware(compiler));
};
