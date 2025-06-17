
// Print All possible subsets of an array

function printSubsets(arr, temp, store, index){
    if(index >= arr.length){
        store.push([...temp])
        return
    }
    temp.push(arr[index])
    printSubsets(arr,temp,store , index+1)

    temp.pop()
    printSubsets(arr,temp,store, index+1)
}


let arr = [1,2,3] , temp = [] , store = [] , index = 0

printSubsets(arr,temp, store, index)
console.log(store);