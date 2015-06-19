import express from 'express';
import serveStatic from 'serve-static';
import cacheControl from 'connect-cache-control';
import compression from 'compression';
import morgan from 'morgan';
import errors from 'common-errors';
import faviconResource from './resources/favicon';
import healthResource from './resources/_health';
import pagesResource from './resources/pages';
import {resolve} from 'path';

const IS_PROD = (process.env.NODE_ENV === 'production');
const app = module.exports = express();

// utility middleware
app.use(cacheControl);
app.use(morgan(IS_PROD ? 'combined' : 'dev'));
app.use(compression());
app.use('/favicon.ico', faviconResource);
app.use('/_health', healthResource);

// app resources
app.use('/assets', serveStatic(resolve(__dirname, '..', 'dist')));
app.use('/', pagesResource);
app.use(errors.middleware.errorHandler);
