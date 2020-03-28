const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const fs = require('fs');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  };

  if (isProd) {
    config.minimizer = [new OptimizeCssAssetWebpackPlugin(), new TerserWebpackPlugin()];
  }

  return config;
};

function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.map((item) => {
    const parts = item.split('.');
    const name = parts[0];
    const extension = parts[1];
    return new HTMLWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
      minify: {
        collapseWhitespace: isProd,
      },
    });
  });
}

const babelOptions = (preset) => {
  const opts = {
    presets: ['@babel/preset-env'],
    plugins: ['@babel/plugin-proposal-class-properties'],
  };

  if (preset) {
    opts.presets.push(preset);
  }

  return opts;
};

const jsLoaders = () => {
  const loaders = [
    {
      loader: 'babel-loader',
      options: babelOptions(),
    },
  ];

  if (isDev) {
    loaders.push('eslint-loader');
  }

  return loaders;
};

const htmlPlugin = generateHtmlPlugins('./src/html/');

const plugins = () => {
  const base = [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: './src/img',
        to: './assets/img',
      },
    ]),
    new MiniCssExtractPlugin({
      filename: isDev ? `style.css` : `style.[hash].css`,
    }),
  ].concat(htmlPlugin);

  return base;
};

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: ['./src/js/script.js', './src/scss/style.scss'],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: isDev ? `script.js` : `script.[hash].js`,
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimization: optimization(),
  devServer: {
    port: 4200,
    hot: isDev,
  },
  devtool: isDev ? 'source-map' : '',
  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use:  [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev,
              reloadAll: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDev,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev,
            },
          }
      ]
      }, {
        test: /\.(png|jpe?g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'assets/img/[name].[ext]' },
          },
        ],
      }, {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: { outputPath: 'assets/fonts/' },
          },
        ],
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'js'),
        use: jsLoaders(),
      },
      {
        test: /\.html$/,
        include: path.resolve(__dirname, 'html'),
        loader: 'html-loader',
      },
    ],
  },
};
