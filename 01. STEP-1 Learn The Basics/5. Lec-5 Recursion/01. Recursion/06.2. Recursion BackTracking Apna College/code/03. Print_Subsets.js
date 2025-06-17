
// Print same array prsent on each 

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