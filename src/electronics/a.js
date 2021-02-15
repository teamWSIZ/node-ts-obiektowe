var A = /** @class */ (function () {
    function A() {
    }
    return A;
}());
var B = /** @class */ (function () {
    function B() {
    }
    B.prototype.doit = function (a) {
    };
    return B;
}());
var a = new A();
var b = new B();
b.doit(a);
b.doit(b);
