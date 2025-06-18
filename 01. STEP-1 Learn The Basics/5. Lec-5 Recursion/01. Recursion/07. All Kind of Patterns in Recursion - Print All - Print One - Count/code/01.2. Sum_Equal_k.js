
// Printing subsequence whose sum is k 

function subSets(arr, index, temp, sum,  store, k){
    if(index >= arr.length){
        if(sum == k){
            store.push([...temp])
        }
        return
    }

    temp.push(arr[index])
    sum += arr[index]
    subSets(arr, index+1, temp, sum, store, k)

    temp.pop()
    sum -= arr[index]
    subSets(arr, index+1, temp, sum, store, k)
}

let arr = [1,2,1] , k = 2, index = 0 , temp = [], sum = 0 , store = []
subSets(arr, index, temp, sum, store, k)

console.log(store);