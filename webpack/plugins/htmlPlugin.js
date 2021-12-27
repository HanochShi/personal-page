import { join } from 'path';
import moment from 'moment';
import { isDev } from '../utils/env';

import HtmlWebpackPlugin from 'html-webpack-plugin';

import { rootDir } from '../utils/env';

const config = {
    // inject: true,
    template: join(rootDir, './public/index.html'),
    /** 作为主应用加载的 entry 使用，产物带时间，方便回溯 */
    filename: isDev ? 'index.html' : `index.${moment().format('YYYYMMDD.hhmmss')}.txt`,
};

export const htmlWebpackPlugin = new HtmlWebpackPlugin(config);
