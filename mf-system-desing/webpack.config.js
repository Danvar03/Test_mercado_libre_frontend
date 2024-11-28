const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('./package.json').dependencies;

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
  },

  mode: 'development',

  devServer: {
    port: 8080,
    historyApiFallback: true,
    hot: false,
    liveReload: false,
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
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: {
        './Header': './src/Header',
        './HeaderNav':
          './src/presentation/components/organism/header/HeaderNav',
      },
      shared: {
        react: {
          singleton: true,
          eager: true,

          requiredVersion: '^18.3.1',
        },
        'react-dom': {
          singleton: true,
          eager: true,

          requiredVersion: '^18.3.1',
        },
      },
    }),

    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
  ],
};
