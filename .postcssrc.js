
module.exports = (ctx) => {
    // This flag is set when loading configuration by this package.
    if (ctx.meteor) {
        const config = {
            plugins: {
                'postcss-import': {},
                'tailwindcss': {},
                'postcss-nested': {},
                'autoprefixer': {}
            },
        };

        if (ctx.env === 'production') {
            // "autoprefixer" is reported to be slow,
            // so we use it only in production.
            config.plugins.autoprefixer = {
                browsers: [
                    'defaults',
                ],
            };
        }

        return config;
    }
    else {
        return {};
    }
};