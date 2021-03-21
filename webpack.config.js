
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports ={
    entry: {
      main: './src/app/App.js',
      library: './src/app/library.js'
  },
    output: {
        filename:"[name].bundled.[contenthash].js",
        path: path.resolve(__dirname, "dist/bundle"),
        clean: true,
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    mode: "development",
    watch: true,

    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html",
        inject: 'body',
        filename: '../index.html',
        
    }),
    // uncomment only for production mode
     new  MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    }),
    

  ],
 


    module: {
        rules: [
          {
            test: /\.scss$/i,
            use: [
              MiniCssExtractPlugin.loader, 
              // 'style-loader',
              'css-loader',
               "sass-loader"],
          },
          
          {
              test: /\.html$/,
              use: [{
                loader: "html-loader",
                options:{
                  esModule: false,
                  
                }
            }]
          },
          {
              test:/\.(svg|png|jpg|gif)$/,
              use: [{
                  loader: "file-loader",
                  options:{
                      name: "[name].[hash].[ext]",
                      outputPath: "../imgs",  
                    
                  }
              }]
          },
          {
            test: /\.(jpg|png|gif|svg)$/,
            loader: 'image-webpack-loader',
            // Specify enforce: 'pre' to apply the loader
            // before url-loader/svg-url-loader
            // and not duplicate it in rules with them
            enforce: 'pre'
          }
        ],
      },    
}
