const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
        }
    ]
      },
      {
        test: /\.(s*)css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(gif|png|jpg|svg)(\?.*$|$)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 25000,
              name: '[name].[ext]',
              publicPath: 'http://localhost:8080/src/assets/static/'
            },
          },
        ],
      },
       {
         test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
         use: [
           {
             loader: 'url-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
              }
           }
         ]
       }, 
    //   {
    //     test: /\.(svg|eot|woff|woff2|ttf)$/,
    //     use: ['file-loader']
    // }
      
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
        filename: 'assets/[name].css',
      }),
  ],
};
