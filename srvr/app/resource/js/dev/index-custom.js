// import 文を使って sub.js ファイルを読み込む。
import { hello } from "./hello";
import { bye } from "./bye";

// sub.jsに定義されたJavaScriptを実行する。
(function(){
    // ここに処理
    hello();
    bye();
})();