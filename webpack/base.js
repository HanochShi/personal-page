import { webpackOutput, alias, externals } from './config';
import { isDev, rootDir } from './utils/env';
import * as rules from './rules';
import * as plugins from './plugins';
import { arrayFilterEmpty } from './utils/helpers';
import optimization from './optimization';

export default {
    context: rootDir,
    target: 'web',
    mode: isDev ? 'development' : 'production',
    entry: './src/pages/index.tsx',
    output: webpackOutput(),
    module: {
        rules: arrayFilterEmpty([
            rules.javascriptRule,
            rules.typescriptRule,
            rules.cssRule,
            rules.lessModulesRule,
            rules.lessRule,
        ]),
    },
    plugins: arrayFilterEmpty([
        plugins.htmlWebpackPlugin,
        plugins.miniCssExtractPlugin,
        plugins.definePlugin,
        plugins.forkTsCheckerWebpackPlugin,
    ]),
    resolve: {
        alias,
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    optimization,
    externals,
};
