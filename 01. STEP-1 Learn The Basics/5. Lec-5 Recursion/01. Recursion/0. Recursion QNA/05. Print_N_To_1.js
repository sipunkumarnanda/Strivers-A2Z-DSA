
// Print n to 1 using recursion

 function printNtoOne(n){
    if(n == 0) return

    console.log(n);
    printNtoOne(n-1)
 }

 printNtoOne(10)