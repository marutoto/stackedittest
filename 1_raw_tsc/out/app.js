var mymodule;
(function (mymodule) {
    var Hoge = (function () {
        function Hoge() {
            console.log('Hoge!');
        }
        return Hoge;
    })();
    var ExportedHoge = (function () {
        function ExportedHoge() {
            console.log('ExportedHoge!');
        }
        return ExportedHoge;
    })();
    mymodule.ExportedHoge = ExportedHoge;
})(mymodule || (mymodule = {}));
//-- jquery.d は出力されない（htmlでは別途、jquery.jsの読み込みが必要） --------------------------------
/// <reference path="./jquery.d.ts" />
//-- mymodule は出力される --------------------------------
/// <reference path="./mymodule.ts" />
console.log($);
console.log('mymodule', mymodule);
//new mymodule.Hoge(); // ← export されていないから使えない
new mymodule.ExportedHoge();
