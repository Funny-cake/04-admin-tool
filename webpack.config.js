const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  context:      path.resolve(__dirname, 'src'),
  mode:         'production',
  entry:        {
    main: './app.jsx',
  },
  output:       {
    filename:   '[name].[contenthash].bundle.js',
    path:       path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devtool:      'source-map',
  plugins:      [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: './index.html',
      inject:   true
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].bundle.css'
    }),
    new CopyWebpackPlugin(
      {
        patterns: [
          { from: './assets', to: path.resolve(__dirname, 'dist/assets') }
        ]
      }
    )
  ],
  devServer:    {
    compress:           true,
    historyApiFallback: true,
    open:               true,
    overlay:            true,
    port:               4201
  },
  resolve:      {
    extensions: ['.js', '.jsx', '.scss', '.woff', '.woff2', '.ttf', '.eot','.mp4','.mov'],
  },
  module:       {
    rules: [
      {
        test: /\.scss$/,
        use:  [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader:  'css-loader',
            options: {
              modules: true,
            },
          },
          {
            loader:  'postcss-loader',
            options: {
              postcssOptions: {
                plugins: function() {
                  return [
                    require('autoprefixer')
                  ];
                }
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use:  ['file-loader']
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },      
      {
        test: /\.(mov|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'video/'
            }  
          }
        ]
      },
      {
        test:    /\.jsx?$/,
        exclude: /node_modules/,
        use:     {
          loader:  'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}
