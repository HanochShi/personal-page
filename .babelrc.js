module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    browsers: ['>1%', 'last 4 versions', 'not ie < 9'],
                },
                useBuiltIns: 'usage',
                debug: false,
                corejs: 3,
            },
        ],
        '@babel/preset-react',
    ],
    plugins: [],
};