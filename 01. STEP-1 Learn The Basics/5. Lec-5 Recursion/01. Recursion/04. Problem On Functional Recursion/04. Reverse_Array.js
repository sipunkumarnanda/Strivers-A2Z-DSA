
// Reverse an array using single pointer 

function reverse(arr, i){
    if(i < Math.floor(arr.length/2)){
        let temp = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp

        return reverse(arr, i+1)
    }else{
        // console.log(arr);
        return arr
    }
}

let arr1 = [1,2,3,4,5]

let res = reverse(arr1, 0)

console.log("reverse : ", res);