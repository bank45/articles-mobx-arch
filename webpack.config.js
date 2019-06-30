const path = require('path')
const webpack = require('webpack')


module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    devtool: false,
    plugins: [
      new webpack.SourceMapDevToolPlugin({})
    ],
    entry: "./src/index.tsx",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.js$/,
                exclude: ['/node_modules/', '/src/scss/'],
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.ts(x?)$/,
                exclude: ['/node_modules/', '/src/scss/'],
                use: [
                    'babel-loader',
                    'ts-loader',
                ]
            },
            {
                test:  /\.json$/,
                loader: 'json-loader'
            },
        ]
    }
};










// module.exports = {
//     mode: "development",
//     context: path.resolve(__dirname, 'src'),
//     entry: {
//         app: ['./index.tsx']
//     },
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist')
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.jsx$/,
//                 exclude: /node_modules/,
//                 use: [
//                     {
//                         loader: 'ts-loader'
//                     }
//                 ]
//             }
//         ]
//     }
// }
