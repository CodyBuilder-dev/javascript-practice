const outer = function() {
    let a = 1;
    const inner = function() {
        return ++a;
    };
    return inner();
}
const outer2 = outer();
console.log(outer2);