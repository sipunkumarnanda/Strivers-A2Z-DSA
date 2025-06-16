
// Print 1 to n using recursion 

function printNum(i, n){
    if(i > n) return

    console.log(i);

    printNum(i+1, n)
}

printNum(1, 10)