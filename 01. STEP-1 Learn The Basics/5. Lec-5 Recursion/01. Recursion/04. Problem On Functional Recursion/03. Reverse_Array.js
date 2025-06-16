
// Reverse an array using recursion (Two pointer algo)

function reverseArray(arr, i, j) {
  if (i < Math.floor(arr.length / 2) && j > Math.floor(arr.length / 2)) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return reverseArray(arr, i + 1, j - 1);
  } else {
    console.log(arr);
    return;
  }
}

let arr1 = [1, 2, 3, 4, 5 , 6, 7, 8, 9];

reverseArray(arr1, 0, arr1.length - 1);
