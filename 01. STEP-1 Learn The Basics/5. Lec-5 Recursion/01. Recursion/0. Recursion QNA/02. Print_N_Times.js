
// Print something n times using recursion

function recursionPrint(n){
    if(n == 0) return
    console.log("Hello");
    recursionPrint(n-1)
    console.log(n);
    console.log("World");
}

recursionPrint(10)