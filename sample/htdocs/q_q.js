var q;
(function (q) {
    var Q = (function () {
        function Q() {
            console.log('Q');
        }
        return Q;
    })();
    q.Q = Q;
})(q || (q = {}));
