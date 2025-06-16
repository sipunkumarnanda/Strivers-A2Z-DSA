
// Print name n times using recursion

function printNtimes(times){
    if(times == 0) return

    console.log('Hello Ankita');
    printNtimes(times-1)
}

printNtimes(5)