module.exports = {
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: {
    index:`./src/index.js`,
    'index-custom':`./src/index-custom.js`,
  },
  mode:"production",
  optimization: {
    minimize: false
  },
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/dist`,
    // 出力ファイル名
    // filename: "main.js"
    filename: '[name].js'
  }
};