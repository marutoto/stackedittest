var kk;
(function (kk) {
    var A = (function () {
        function A() {
            console.log('A');
            console.log($);
        }
        return A;
    })();
    kk.A = A;
})(kk || (kk = {}));


var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var kk;
(function (kk) {
    var Alpha_extA = (function (_super) {
        __extends(Alpha_extA, _super);
        function Alpha_extA() {
            _super.call(this);
            console.log('Alpha extends A');
        }
        return Alpha_extA;
    })(kk.A);
    kk.Alpha_extA = Alpha_extA;
})(kk || (kk = {}));


var kk;
(function (kk) {
    var B = (function () {
        function B() {
            console.log('B');
        }
        return B;
    })();
    kk.B = B;
})(kk || (kk = {}));


var kk;
(function (kk) {
    var C = (function () {
        function C() {
            console.log('C');
        }
        return C;
    })();
    kk.C = C;
})(kk || (kk = {}));


//-- kk refs ----------------------------------------------------
/*
 * declaration files
 */
/// <reference path="../declaration/jquery.d.ts" />
/*
 * this module files
 *
 * A.ts と M_extA.ts の位置を入れ替えると実行時エラー
 */
/// <reference path="A.ts" />
/// <reference path="C.ts" />
/// <reference path="B.ts" />
/// <reference path="Alpha_extA.ts" />


var ll;
(function (ll) {
    var D = (function () {
        function D() {
            console.log('D');
            // _ll_refs.tsでリファレンスを指定しているので
            // tscコンパイル時に「Cannot find name 'qq'」的なコンパイルエラーにならない
            new qq.Qhoge();
            console.log($);
            new kk.Alpha_extA();
        }
        return D;
    })();
    ll.D = D;
})(ll || (ll = {}));


//-- ll refs ----------------------------------------------------
/*
 * declaration files
 */
// ここに書くべき？
/// <reference path="../declaration/qq.d.ts" />
/*
 * this module files
 */
/// <reference path="D.ts" />
/*
 * other dependented module
 */
/// <reference path="../kk/_kk_refs.ts" />


//# sourceMappingURL=app_ll.js.map