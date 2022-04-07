// let s1 = "abcba"
// let s2 = "abcbcba"
// let s1 = "abc"
// let s2 = "abc"
let s1 = "abcde"
let s2 = "ace"
console.log(fn(s1, s2))

function fn(text1, text2) {
    let len1 = text1.length, len2 = text2.length;

    let arr = new Array(len1 + 1).fill(0);
    for (let i = 0; i <= len1; i++) {
        arr[i] = new Array(len2 + 1).fill(0);
    }

    for (let i = 0; i < len1; i++) {
        for (let j = 0; j < len2; j++) {
            if (text1[i] == text2[j]) {
                arr[i + 1][j + 1] = arr[i][j] + 1;
            }
            else {
                arr[i + 1][j + 1] = Math.max(arr[i + 1][j], arr[i][j + 1]);
            }
        }
    }
    return arr[len1][len2];
}