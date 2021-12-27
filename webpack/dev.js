import { port, host, devServerProxyConfig } from './config';

export default {
    devtool: 'cheap-module-source-map',
    devServer: {
        static: {
            publicPath: '/',
        },
        port,
        historyApiFallback: true,
        // 不设置的话在eshop-s.staging.kuaishou.com 会断连。 类似webpack4的disableHostCheck
        allowedHosts: 'all',
        headers: { 'Access-Control-Allow-Origin': '*' },
        hot: true,
        https: true,
        open: true,
        client: {
            overlay: false, // 当出现编译错误或警告时，在浏览器中显示全屏覆盖
            progress: false, // 在浏览器中以百分比显示编译进度
        },
        host,
    },
};
