import { join } from 'path';
import { isDev, rootDir } from './utils/env';
import { name } from '../package.json';

export const port = 3000;
export const host = "localhost";

export const webpackOutput = () => {
    return {
        path: join(__dirname, '../dist'),
        filename: '[name].[fullhash].js',
        library: `${name}-[name]`,
        libraryTarget: 'umd',
        chunkLoadingGlobal: `webpackJsonp_${name}`,
        chunkLoading: 'jsonp',
    };
};

export const alias = {
    '@src': join(rootDir, '/src'),
    '@api': join(rootDir, '/src/api'),
    '@pages': join(rootDir, '/src/pages'),
    '@assets': join(rootDir, '/src/assets'),
    '@common': join(rootDir, '/src/common'),
    '@enum': join(rootDir, '/src/enum'),
};