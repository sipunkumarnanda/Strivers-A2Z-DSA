
// Striver Technique
// Print any subsequence whose sum is equal to sum/k 
// Technique to print only once 

function subSets(arr, index, temp, sum,  store, k){
    if(index >= arr.length){
        if(sum == k){
            store.push([...temp])
            return true
        }
        return false
    }

    temp.push(arr[index])
    sum += arr[index]
    if(subSets(arr, index+1, temp, sum, store, k) == true) return true

    temp.pop()
    sum -= arr[index]
    if(subSets(arr, index+1, temp, sum, store, k) == true) return true
}

let arr = [1,2,1] , k = 2, index = 0 , temp = [], sum = 0 , store = []
subSets(arr, index, temp, sum, store, k)

console.log(store);