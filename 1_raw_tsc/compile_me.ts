
//-- jquery.d は出力されない（htmlでは別途、jquery.jsの読み込みが必要） --------------------------------
/// <reference path="./jquery.d.ts" />

//-- mymodule は出力される --------------------------------
/// <reference path="./mymodule.ts" />

console.log($);

console.log('mymodule', mymodule);
//new mymodule.Hoge(); // ← export されていないから使えない
new mymodule.ExportedHoge();
