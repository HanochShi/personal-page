import merge from 'webpack-merge';
import baseConfig from './webpack/base';
import devConfig from './webpack/dev';
import { isDev } from './webpack/utils/env';
import prodConfig from './webpack/prod';

export default () => {
    return isDev ? merge(baseConfig, devConfig) : merge(baseConfig, prodConfig);
};
