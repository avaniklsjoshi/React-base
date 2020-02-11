/* eslint-disable */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const GitRevisionPlugin = require('git-revision-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const gitInfo = new GitRevisionPlugin();
const htmlPlugin = new HtmlWebpackPlugin({
  commitHash: JSON.stringify(gitInfo.commithash()),
  template: './src/index.html',
  favicon: './public/favicon.ico',
});

module.exports =  {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'), 
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json', '.css'],
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [htmlPlugin, new MiniCssExtractPlugin()],
};

