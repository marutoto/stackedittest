var qq;
(function (qq) {
    var Q = (function () {
        function Q() {
            console.log('Q');
        }
        return Q;
    })();
    qq.Q = Q;
})(qq || (qq = {}));
