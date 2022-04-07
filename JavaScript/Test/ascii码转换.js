let char = 'A'
console.log(char.charCodeAt()) // 65
char = 'AB'
console.log(char.charCodeAt())
char = String.fromCharCode(char.charCodeAt(1) + 1)
console.log(char) // C
