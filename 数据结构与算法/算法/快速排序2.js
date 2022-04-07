let count = 1;
function swap(arr, i, j) {
    let tem = arr[i];
    arr[i] = arr[j];
    arr[j] = tem;
}

function QSort(arr, left, right) {
    if (left < right) {
        let tem = arr[left], i = left, j = right;
        while (i < j) {
            while (tem <= arr[j]) {
                j--;
            }
            i < j ? swap(arr, i, j) : '';
            while (arr[i] < tem) {
                i++;
            }
            i < j ? swap(arr, i, j) : '';
            console.log(count++, arr);
        }
        QSort(arr, left, i - 1);
        QSort(arr, i + 1, right);
    }
}

function QuickSort(arr) {
    QSort(arr, 0, arr.length - 1);
}

let arr = [10, 3, 2, 6, 8, 5, 10];
console.log(QuickSort(arr));