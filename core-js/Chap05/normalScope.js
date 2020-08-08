const outer = function() {
    let a = 1;
    const inner = function() {
        console.log(++a);
    };
    inner();
}
outer();
