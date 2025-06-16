
// Reverse an array using recursion 

let arr = [1,2,3,4,5]

function reverse(length){
    if(length == 0){
        return
    }
    console.log(arr[length-1]);

    return reverse(length-1)
}

reverse(arr.length)