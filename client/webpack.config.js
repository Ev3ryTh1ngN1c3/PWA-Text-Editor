// Import necessary plugins & modules
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// Export a function that returns the webpack configuration
module.exports = () => {
  return {
    // Set the mode to development
    mode: 'development',
    
    // Define entry points for the application
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    
    // Configure output settings
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    
    // Add plugins for additional functionality
    plugins: [
      // Generate HTML file with injected script tags
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      
      // Generate a Web App Manifest for the Progressive Web App
      new WebpackPwaManifest({
        name: 'My Progressive Web App',
        short_name: 'MyPWA',
        description: 'This is my awesome Progressive Web App!',
        background_color: '#ffffff',
        theme_color: '#2196f3',
        icons: [
          {
            src: path.resolve('src/assets/icon.png'),
            sizes: [96, 128, 192, 256, 384, 512]
          }
        ]
      }),
      
      // Inject the service worker into the webpack build
      new InjectManifest({
        swSrc: './src/sw.js'
      })
    ],
    
    // Define module rules for handling different file types
    module: {
      rules: [
        // Process CSS files using style-loader and css-loader
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        
        // Process JavaScript files using babel-loader
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ],
    },
  };
};