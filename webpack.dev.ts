
/* eslint-disable import/no-extraneous-dependencies */
import * as webpack from 'webpack';
import * as HtmlWebPackPlugin from 'html-webpack-plugin';
import * as GitRevisionPlugin from 'git-revision-webpack-plugin';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';

const gitInfo = new GitRevisionPlugin();
const htmlPlugin = new HtmlWebPackPlugin({
  commitHash: JSON.stringify(gitInfo.commithash()),
  template: './src/index.html',
});

const config: webpack.Configuration = {
  mode: 'development',
  entry: './src/index.tsx',
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
    ],
  },
  plugins: [htmlPlugin, new MiniCssExtractPlugin()],
};

export default config;
