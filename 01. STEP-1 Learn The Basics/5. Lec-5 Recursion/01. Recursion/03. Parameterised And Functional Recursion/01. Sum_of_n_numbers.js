
// sum of first n numbers

function summation(i, sum){
    if(i < 1){
        console.log(sum)
         return
    }
    
    summation(i-1 , sum + i)
}

summation(5, 0)