var a = 55;
console.log(a);
console.log(typeof a);
var b = "pooja";
console.log(b);
var c = true;
console.log(c);
var d = undefined;
console.log(d);
var s = true;
console.log(s);
console.log(typeof s);
var p = "pppp";
p = 55;
p = true;
console.log(p);
console.log(typeof p);
var arr = [20, 30, 40, 50, 60, 70];
console.log(arr);
function sum(a, b, c) {
    return a + b;
}
console.log(sum(20, "pooja"));
function sum2(a, b, c) {
    console.log(a + b);
}
console.log(sum2(20, "john"));
//enum
var days;
(function (days) {
    days[days["Sunday"] = 0] = "Sunday";
    days[days["Monday"] = 1] = "Monday";
    days[days["Tuesday"] = 2] = "Tuesday";
    days[days["Thursday"] = 3] = "Thursday";
    days[days["Friday"] = 4] = "Friday";
    days[days["Saturday"] = 5] = "Saturday";
})(days || (days = {}));
console.log(days.Sunday);
console.log(days[6]);
var pp1 = /** @class */ (function () {
    function pp1(n, e, s, a) {
        this.name = n;
        this.email = e;
        this.salary = s;
        this.age = a;
    }
    return pp1;
}());
var ss = new pp1("ppp", "dd@ff.com", 123, 78);
console.log(ss);
function clicky(e) {
    console.log(e);
    var r = e.target;
    console.log(r.textContent);
}
function sum3(x, y) {
    console.log(x, y);
}
sum3("ppp", "kkk");
sum3(2, 5);
