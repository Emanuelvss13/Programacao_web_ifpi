function exibir() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    return a;
}
console.log(exibir("a", "b"));
console.log(exibir("a", "b", "c"));
console.log(exibir("a", "b", "c", "d"));
