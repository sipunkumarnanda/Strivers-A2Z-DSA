
// Sub array sum (leetcode - 560)

function subsequence(arr, target){
    let Count = 0

    for(let i=0; i<arr.length; i++){
        let curSum = []
        let sum = 0
        for(let j=i; j<arr.length; j++){
            curSum.push(arr[j])
            sum += arr[j]
            console.log(curSum);
            console.log(sum);
            if(sum == target){
                console.log("Targeted Array : ", curSum);
            }
        }
    }
}

subsequence(arr,target)