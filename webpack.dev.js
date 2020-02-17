
/* eslint-disable */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const GitRevisionPlugin = require('git-revision-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const gitInfo = new GitRevisionPlugin();

module.exports = {
  mode: 'development',
  entry:['react-hot-loader/patch', './src/index.tsx'], 
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json', '.css'],
    "alias": {
      "react-dom": "@hot-loader/react-dom"
    }
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      {
        test: /\.s[ac]ss$/i,
        use: [{ loader: 'style-loader' },
        {
          loader: "css-loader",
         
        },
        {
          loader: 'sass-loader', options: { sourceMap: true }
        }],
      },
     
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
    commitHash: JSON.stringify(gitInfo.commithash()),
    template: 'src/app/index.ejs',
  }), 
  new MiniCssExtractPlugin()
  ],
  };

