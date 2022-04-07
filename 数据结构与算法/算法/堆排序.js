let len; // 全局放置数组长度

// 初始化：建立大根堆
const buildHeap = (arr) => {
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
        heapify(arr, i);
    }
}

// 对调整
const heapify = (arr, i) => {
    let left = i * 2 + 1, right = i * 2 + 2, largest = i;
    if (left < len && arr[largest] < arr[left]) largest = left;
    if (right < len && arr[largest] < arr[right]) largest = right;
    if (largest !== i) {
        swap(arr, largest, i);
        heapify(arr, largest);
    }
}

// 数组交换
const swap = (arr, i, j) => {
    arr[i] = [arr[j], arr[j] = arr[i]][0];
}

// 堆排序
const heapSort = (arr) => {
    len = arr.length;
    buildHeap(arr);
    for (let i = len - 1; i >= 0; i--) {
        swap(arr, 0, i);
        len--;
        heapify(arr, 0);
    }
    return arr;
}

const arr = [5, 2, 6, 1, 4, 10, 0];
console.log(heapSort(arr));