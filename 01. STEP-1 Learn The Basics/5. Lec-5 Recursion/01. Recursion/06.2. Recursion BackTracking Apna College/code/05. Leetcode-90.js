
// Leetcode - 90. Subsets II

const { all } = require("axios")

// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

// let arr = [1,2,2]   // Output : [[],[1],[1,2],[1,2,2],[2],[2,2]]

function subsets(arr, index , temp, allSubsets){
    if(index >= arr.length){
        allSubsets.push([...temp])
        return
    }

    temp.push(arr[index])
    subsets(arr, index + 1 , temp, allSubsets)

    temp.pop()

    index = index + 1
    while(index < arr.length && arr[index] == arr[index-1]){
        index++
    }

    subsets(arr, index , temp, allSubsets)
}

let arr = [1,2,2]   , temp = [] , allSubsets = [] , index = 0

arr.sort((a,b) => a-b)
subsets(arr, index, temp, allSubsets)
console.log(allSubsets);