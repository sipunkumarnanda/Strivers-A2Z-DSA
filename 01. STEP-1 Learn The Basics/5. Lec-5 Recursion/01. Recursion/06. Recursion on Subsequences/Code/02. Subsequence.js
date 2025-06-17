
// Print all Subsequence using Recursion 
//  a contigious or non-contigious sequence which follows the order , is called subsequence 

let arr = [1,2,3]

let store = []

function subsequence(arr, index,store ){
    if(index >= arr.length){
        console.log(store);
        return
    }

    // Take or pick the particular index into the subsequence 
    store.push(arr[index])
    subsequence(arr, index+1, store)

    // not pick , or not take condition , this element is not added to your subsequence
    store.pop()
    subsequence(arr, index+1, store)
}

subsequence(arr, 0, store)