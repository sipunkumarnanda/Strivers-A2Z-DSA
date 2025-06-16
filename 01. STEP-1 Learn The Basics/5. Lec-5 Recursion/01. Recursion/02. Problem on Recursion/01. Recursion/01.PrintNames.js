
// Print names 5 times 

function printName(i, n){
    if(i > n) return

    console.log("Sipun : ", i);

    printName(i+1, n)
}

printName(1,5)