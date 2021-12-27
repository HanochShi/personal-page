import { arrayFilterEmpty } from '../utils/helpers';
import {
    miniCssExtractLoader,
    postCssLoader,
    cssLoader,
    lessLoader,
    cssModulesSupportLoaderItems,
} from './useLoaderRuleItems';

/** css **/
export const cssRule = {
    test: /\.css$/,
    use: [miniCssExtractLoader, cssLoader, postCssLoader],
};

/** less **/
export const lessModulesRule = {
    test: /\.module.less$/,
    use: arrayFilterEmpty([...cssModulesSupportLoaderItems, postCssLoader, lessLoader]),
};
export const lessRule = {
    test: /\.less$/,
    exclude: /\.module.less$/,
    use: arrayFilterEmpty([miniCssExtractLoader, cssLoader, postCssLoader, lessLoader]),
};
