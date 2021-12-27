import { babelLoader } from './useLoaderRuleItems';

export const typescriptRule = {
    test: /\.tsx?$/,
    loader: 'ts-loader',
    options: {
        transpileOnly: true,
    },
    exclude: /node_modules/,
};

export const javascriptRule = {
    test: /\.(js|jsx)$/,
    use: [babelLoader],
    exclude: /node_modules/,
};