
// Print linearly from 1 to n 
// (But by Backtracking)

function printNum(n){
    if(n < 1) return

    printNum(n-1)
    
    console.log(n);
}

printNum(10)

// The console.log(n) will execute only after the recursive call printNum(n-1) has completely executed and returned