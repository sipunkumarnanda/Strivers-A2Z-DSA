
// Leetcode - 90. Subsets II

// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

// let arr = [1,2,2]   // Output : [[],[1],[1,2],[1,2,2],[2],[2,2]]

function isSameArray(a,b){
        return a.length == b.length && 
        a.every((value, index)=> {
        return value == b[index]
    })
}

function printSubsets(arr, index, temp, store){
    if(index >= arr.length){

        const exsits = store.some((element)=> isSameArray(element, temp)) 
        // (some) check if only one elem is present then return true 
        
        if(!exsits){
            store.push([...temp])
        }
        return
    }

    temp.push(arr[index])
    printSubsets(arr, index+1, temp, store)

    temp.pop()
    printSubsets(arr, index+1, temp, store)
}


let arr = [1,2,2] , temp = [] , store = [] , index = 0

printSubsets(arr, index, temp, store)

console.log(store);