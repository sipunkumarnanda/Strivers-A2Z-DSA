
// Printing subsequence whose sum is k 

function subSets(arr, index, temp, store, k){
    if(index >= arr.length){
        let sum = temp.reduce((prev,curr)=>{
            return prev + curr
        },0)

        if(sum == k){
            store.push([...temp])
        }
        return
    }

    temp.push(arr[index])

    subSets(arr, index+1, temp, store, k)

    temp.pop()
    subSets(arr, index+1, temp, store, k)
}

let arr = [1,2,1] , k = 2, index = 0 , temp = [] , store = []
subSets(arr, 0, temp, store, k)

console.log(store);