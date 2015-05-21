var kk;
(function (kk) {
    var A = (function () {
        function A() {
            console.log('A');

            var c = new kk.C();
        }
        return A;
    })();
    kk.A = A;
})(kk || (kk = {}));
var kk;
(function (kk) {
    var C = (function () {
        function C() {
            console.log('C');

            new kk.B();
        }
        return C;
    })();
    kk.C = C;
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
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var kk;
(function (kk) {
    var M_extA = (function (_super) {
        __extends(M_extA, _super);
        function M_extA() {
            _super.call(this);

            console.log('M extends A');

            new kk.B();

            new qq.Q();
        }
        return M_extA;
    })(kk.A);
    kk.M_extA = M_extA;
})(kk || (kk = {}));
var kk;
(function (kk) {
    var Main = (function () {
        function Main() {
            console.log('hello');
            console.log('jQuery', $);

            new kk.M_extA();
        }
        return Main;
    })();
    kk.Main = Main;
})(kk || (kk = {}));
