function f() {
    let args = [].concat.apply(arguments)
    console.log(args)
}
f(1,2,3)
