// N皇后问题
const solveNQueens = (n = 4) => {
    const solve = []; // 存储全部解法
    const queen = new Array(n); // 存储皇后位置
    const attack = new Array(n); // 标记皇后的攻击位置
    // 初始化queen和attack
    for (let i = 0; i < n; i++) {
        queen[i] = new Array(n).fill('.');
        attack[i] = new Array(n).fill(0);
    }
    backtrack(0, n, queen, attack, solve); // 回溯算法
    return solve;
}
/**
 * 回溯法求解N皇后的递归函数
 * @param {*} k 表示当前处理的行
 * @param {*} n 表示N皇后问题
 * @param {*} queen 存储皇后的位置
 * @param {*} attack 标记皇后的攻击位置
 * @param {*} solve 存储N皇后的全部解法
 */
const backtrack = (k, n, queen, attack, solve) => {
    // 找到一组解，并存储到solve
    if (k == n) {
        const cloneQueen = cloneArray(queen);
        solve.push(cloneQueen);
        return;
    }
    // 遍历所有列，在循环中，回溯试探皇后可以放置的位置
    for (let i = 0; i < n; i++) {
        if (attack[k][i] == 0) { // 判断当前第k行i列是否可以放置
            const cloneAttack = cloneArray(attack); // 克隆备份attack
            setAttack(k, i, attack); // 更新attack
            queen[k][i] = 'Q'; // 标记该位置为Q
            backtrack(k + 1, n, queen, attack, solve); // 递归下一行可放置皇后的位置
            attack = cloneAttack; // 恢复attack
            queen[k][i] = '.'; // 恢复queen
        }
    }
}
// 设置攻击位置
const setAttack = (x, y, attack) => {
    // 只需要标记左下、正下、右下方位置即可
    const dx = [1, 1, 1];
    const dy = [-1, 0, 1];
    const len = attack.length;
    // 经过两层循环，将该皇后可能攻击到的位置进行标记
    for (let i = 1; i < len; i++) { // 从皇后位置向1到n-1个距离延伸
        for (let j = 0; j < dx.length; j++) { // 遍历3个方向
            const nx = x + i * dx[j]; // 行位置
            const ny = y + i * dy[j]; // 列位置
            if (nx >= 0 && nx < len && ny >= 0 && ny < len) { // 新位置在合法范围内
                attack[nx][ny] = 1; // 将新位置标记为1
            }
        }
    }
}
// 深克隆二维数组
const cloneArray = (arr) => {
    const result = [];
    arr.forEach(item => {
        result.push(Array.from(item));
    })
    return result;
}
console.log(solveNQueens());