
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports ={
    entry: {
      main: './src/app/App.js',
      home: './src/app/another.js'
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
    mode: "production",
    watch: true,

    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html",
        inject: 'body',
        filename: '../index.html',
        
    }),
    //uncomment only for production mode
    //  new  MiniCssExtractPlugin({
    //   filename: "[name].[contenthash].css"
    // }),
 
    

  ],
 


    module: {
        rules: [
          {
            test: /\.scss$/i,
            use: [
              // MiniCssExtractPlugin.loader, 
              'style-loader',
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
        ],
      },
      plugins:[   
        new ImageMinimizerPlugin({
        minimizerOptions: {
          // Lossless optimization with custom option
          // Feel free to experiment with options for better result for you
          plugins: [
            ['gifsicle', { interlaced: true }],
            ['jpegtran', { progressive: true }],
            ['optipng', { optimizationLevel: 5 }],
            [
              'svgo',
              {
                plugins: [
                  {
                    removeViewBox: false,
                  },
                ],
              },
            ],
          ],
        },
      }),
    ]
     
}
