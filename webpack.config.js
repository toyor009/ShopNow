module.exports = {
  //...
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  output: {
    sourceMapFilename: '[file].map', 
  },
  stats: {
    warningsFilter: [/vision_bundle_mjs\.js/],
  },
};