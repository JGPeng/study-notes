interface SearchFunc {
    (a: string, b: string): boolean
}
const mySearch: SearchFunc = function (source: string, sub: string): boolean {
    return source.search(sub) > -1
}

console.log(mySearch('abcd', 'bc'))