/**
 * 很久很久以前，有一位国王拥有5座金矿，每座金矿的黄金储量不同，
 * 需要参与挖掘的工人人数也不同。例如有的金矿储量是500kg黄金，
 * 需要5个工人来挖掘；有的金矿储量是200kg黄金，需要3个工人来挖掘……
 * 如果参与挖矿的工人的总数是10。每座金矿要么全挖，要么不挖，
 * 不能派出一半人挖取一半的金矿。要求用程序求出，要想得到尽可能多的黄金，
 * 应该选择挖取哪几座金矿？
 */

/**
* W 为人工数
* P 为金矿价值
* G 为每个金矿需要的人工数
*/
let W = 10
let P = [500, 400, 350, 300, 200], G = [5, 5, 3, 4, 3]
console.log(goldOre(W, P, G))

/**
 * 动态规划法
 * @W 为人工数
 * @P 为金矿价值
 * @G 为每个金矿需要的人工数
*/
function goldOre(W, P, G) {
    let len = P.length;
    let resultArray = new Array(len + 1);
    for (let i = 0; i <= len; i++) {
        resultArray[i] = new Array(W + 1).fill(0);
    }
    for (let i = 1; i <= len; i++) {
        for (let j = 1; j <= W; j++) {
            if (j < G[i - 1]) {
                resultArray[i][j] = resultArray[i - 1][j];
            } else {
                resultArray[i][j] = Math.max(resultArray[i - 1][j], resultArray[i - 1][j - G[i - 1]] + P[i - 1]);
            }
        }
    }
    return resultArray[len][W];
}