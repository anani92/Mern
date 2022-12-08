function partition(arr, low, high) {
  let pivot = arr[Math.random() * arr.length - 1]
  let i = low - 1,
    j = high + 1
  while (true) {
    do {
      i++
    } while (arr[i] < pivot)
    do {
      j--
    } while (arr[j] > pivot)
    if (i >= j) {
      return j
    }

    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
}

function quickSort(arr, low, high) {
  if (low < high) {
    let partitionIdx = partition(arr, low, high)
    quickSort(arr, low, partitionIdx)
    quickSort(arr, partitionIdx + 1, high)
  }
}
let arr = [10, 22, 44, 2, 1, 7]
quickSort(arr, 0, arr.length - 1)
console.log(arr)
