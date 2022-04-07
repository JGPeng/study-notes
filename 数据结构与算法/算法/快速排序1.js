const quickSort = (arr, start, end) => {
    let left = typeof start !== 'number' ? 0 : start
    let right = typeof end !== 'number' ? arr.length - 1 : end
    if (left >= right) return
    let point = right
    while (left < right) {
        while (left < right && arr[left] <= arr[point]) left++
        if (left < right) swap(arr, left, point)
        while (left < right && arr[right] >= arr[point]) right--
        if (left < right) swap(arr, right, point)
    }
    quickSort(arr, start, right - 1)
    quickSort(arr, right + 1, end)
}
const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

const arr = [1, 5, 4, 3, 7, 2, 7, 10, 0, -2]
quickSort(arr, null, null)
console.log(arr)