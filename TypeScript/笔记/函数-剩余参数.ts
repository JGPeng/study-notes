function info(x: string, ...args: string[]) {
    console.log(x, args)
}
info('abc', 'c', 'b', 'a')

function info2(x: string, ...args: any[]) {
    console.log(x, args)
}
info2('gerald', true, 'abc', 520, [1, 2, 'a', false])