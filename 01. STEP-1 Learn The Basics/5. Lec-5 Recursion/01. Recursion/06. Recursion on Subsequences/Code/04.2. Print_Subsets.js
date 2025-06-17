
// Leetcode - 90. Subsets II

// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

// let arr = [1,2,2]   // Output : [[],[1],[1,2],[1,2,2],[2],[2,2]]


let arr1 = [[1,2] , [1,2,3], [4,5] , [4,5,6]]
let arr2 = [[1,2] , [1,2,3], [1,2,3,4], [7,8,9]]

function sameArray(a,b){
    return a.length === b.length && a.every((value,index)=>{
        return value === b[index]
    })
}


for (const elem1 of arr1) {
    for (const elem2 of arr2) {
        if(sameArray(elem1, elem2)){
            console.log(elem1);
        }
    }
}