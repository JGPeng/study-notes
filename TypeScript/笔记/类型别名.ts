type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}

console.log(getName('gerald'))
console.log(getName(()=>'JGPeng'))
// console.log(getName(()=>10086)) // 报错