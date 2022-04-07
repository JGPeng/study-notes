// 最长升序序列
var longestConsecutive = function (nums) {
    let len = nums.length;
    let arr = new Array(len).fill(1);
    let max = 1;
    for (let i = 1; i < len; i++) {
        let list = [];
        nums.slice(0, i).forEach((item, index) => {
            if (item < nums[i]) {
                list.push(arr[index]);
            }
        })
        if (list.length > 0) {
            arr[i] = Math.max(...list) + 1;
            if (arr[i] > max) max = arr[i]
        }
    }
    return max;
};
console.log(longestConsecutive([100, 4, 200, 1, 3, 4, 2]))