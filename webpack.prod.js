/* eslint-disable */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const GitRevisionPlugin = require('git-revision-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const gitInfo = new GitRevisionPlugin();
const htmlPlugin = new HtmlWebpackPlugin({
  commitHash: JSON.stringify(gitInfo.commithash()),
  template:  'src/app/index.ejs',
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
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    htmlPlugin, 
    new MiniCssExtractPlugin()
  ],
};

