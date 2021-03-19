
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const {CleanWebpackPlugin} = require("clean-webpack-plugin");
module.exports ={
    entry: './src/app/App.js',
    output: {
        filename:"bundled.[contenthash].js",
        path: path.resolve(__dirname, "dist/bundle"),
        clean: true,
    },
    mode: "development",
    watch: true,

    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html",
        inject: 'body',
        filename: '../index.html',
        
    })
  ],
 


    module: {
        rules: [
          {
            test: /\.scss$/i,
            use: ['style-loader', 'css-loader', "sass-loader"],
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
        ],
      },

     
}
