
// Print interm of opposite fasion 

// print in term of n to 1 

function printReverse(i){
    if(i < 1) return

    console.log(i);

    printReverse(i-1)
}

printReverse(4)