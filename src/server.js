import { join } from 'path';
import { fileURLToPath } from 'url';

import express from 'express';

import routes from './routes.js';
import withDevSever from './withDevServer.js';

const rootDir = join(fileURLToPath(import.meta.url), '..', '..');
const staticDir = join(rootDir, 'static');
const indexFile = join(staticDir, 'index.html');
const PORT = process.env.PORT || 5000;
const server = express();

server.set('port', PORT);

server.use('/', express.static(staticDir));

if (process.env.NODE_ENV === 'development') {
    withDevSever(server);
}

routes.forEach(route => {
    server.get(`/${route}`, (req, res) => {
        res.sendFile(indexFile);
    });
});

server.use((req, res) => {
    res.status(404).sendFile(indexFile);
});

server.listen(PORT, () => {
    /* eslint-disable-next-line no-console */
    console.log(`Start server on port ${PORT}.`);
});
