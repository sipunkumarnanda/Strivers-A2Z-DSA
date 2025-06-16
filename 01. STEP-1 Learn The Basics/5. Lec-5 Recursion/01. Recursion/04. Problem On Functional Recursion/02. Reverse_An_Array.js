
// Reverse an array using recursion 

let array = [1,2,3,4,5]

function reverse(arr, length){
    if(length == 0){
        return
    }
    console.log(arr[length-1]);

    return reverse(arr, length-1)
}

reverse(array, array.length)