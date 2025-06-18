
// Count the subsequences with sum equal to k .

function subsequence(arr, index, target, temp, sum){
    if(index >= arr.length){
        if(sum == target){
        //    count++
           return 1
        }
        return 0
    }

    temp.push(arr[index])
    sum += arr[index]
     let include = subsequence(arr, index+1, target, temp, sum)

     temp.pop()
     sum -= arr[index]
     let exclude = subsequence(arr, index+1, target, temp, sum)

     return include + exclude
}

let arr = [1,2,1] 
let target = 3 , index = 0 , temp = []  , sum = 0

let res = subsequence(arr, index, target, temp, sum)

console.log(res);