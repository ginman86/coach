const PATHS = {
    app: __dirname + '/app',
    build: __dirname + '/dist'
}

const common = {
    entry: PATHS.app + '/index.jsx',
    resolve: {
        extensions: ['','.js','.jsx']
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
                include: PATHS.app
            },
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                include: PATHS.app
            }
        ]
    }
}

module.exports = common
