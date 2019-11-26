module.exports = {
    mode: 'development',
    //Tell webpack to run babel every file it runs through
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: { browsers: ['last 2 versions'] } }]
                    ]
                }
            }
        ]
    }
};