
// Print n to 1 by using back tracking

function printRev(i, n){
    if(i > n) return

    printRev(i+1, n)

    console.log(i);
    
}

printRev(1, 5)