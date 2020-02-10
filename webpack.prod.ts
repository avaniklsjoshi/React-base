/* eslint-disable import/no-extraneous-dependencies */

import * as webpack from 'webpack';
import * as HtmlWebPackPlugin from 'html-webpack-plugin';
import * as GitRevisionPlugin from 'git-revision-webpack-plugin';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as path from 'path';

const gitInfo = new GitRevisionPlugin();
const htmlPlugin = new HtmlWebPackPlugin({
  commitHash: JSON.stringify(gitInfo.commithash()),
  template: './src/index.html',
  favicon: './public/favicon.ico',
});

const config: webpack.Configuration = {
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

export default config;
