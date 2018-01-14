const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env, argv) => {
    const isProduction = env === 'production';
    const ExtractCss = new ExtractTextPlugin('styles.css');

    return {
        // entry point of the application
        entry: './src/app.js',
        // where to output our bundled application
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                // loader (convert es6 to es5, jsx to javascript, scss to css, etc)       
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: ExtractCss.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [
            ExtractCss
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    };
};


