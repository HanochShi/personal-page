import { DefinePlugin } from 'webpack';

const config = {
    'process.env.REACT_APP_NODE_ENV': JSON.stringify(process.env.REACT_APP_NODE_ENV),
};

export const definePlugin = new DefinePlugin(config);
