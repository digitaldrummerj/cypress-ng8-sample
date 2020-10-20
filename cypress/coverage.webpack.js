module.exports = {
    module: {
        rules: [
            {
                test: /\.(ts)$/,
                use: {
                    loader: 'istanbul-instrumenter-loader',
                    options: {
                        debug: true,
                        esModules: true
                    }
                },
                enforce: 'post',
                include: require('path').join(__dirname, '..', 'src'),
                exclude: [
                    /node_modules/,
                    /cypress/,
                    /(ngfactory|ngstyle)\.js/]
            },
        ],
    },
};
