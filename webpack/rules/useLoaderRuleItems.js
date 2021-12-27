import { join } from 'path';
import { rootDir, isDev } from '../utils/env';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const cssLoader = {
    loader: 'css-loader',
};

export const postCssLoader = {
    loader: 'postcss-loader',
    options: {
        postcssOptions: {
            config: join(rootDir, 'postcss.config.js'),
        },
        sourceMap: true,
    },
};

export const babelLoader = {
    loader: 'babel-loader',
    options: {
        configFile: join(rootDir, '/.babelrc.js'),
    },
};

export const miniCssExtractLoader = isDev ? {
    loader: 'style-loader',
    options: {
        esModule: false,
    },
} : {
    loader: MiniCssExtractPlugin.loader,
    options: {
        esModule: false,
    },
};

export const lessLoader = {
    loader: 'less-loader',
    options: {
        sourceMap: true,
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: {},
        },
    },
};

export const cssModulesSupportLoaderItems = [
    miniCssExtractLoader,
    {
        ...cssLoader,
        options: {
            esModule: false,
            modules: {
                exportLocalsConvention: 'camelCaseOnly',
                localIdentName: '[local]__[contenthash:base64:5]',
            },
        },
    },
];