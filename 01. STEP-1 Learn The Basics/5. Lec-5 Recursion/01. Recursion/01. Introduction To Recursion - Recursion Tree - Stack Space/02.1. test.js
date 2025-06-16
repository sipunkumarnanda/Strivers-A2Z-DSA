
function five(){
    return 5
}

function print(){
    return 10 + five()
}

let res = print()

console.log(res);   // 15