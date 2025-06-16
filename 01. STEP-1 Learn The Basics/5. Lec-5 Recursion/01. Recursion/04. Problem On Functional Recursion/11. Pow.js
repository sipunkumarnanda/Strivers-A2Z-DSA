
// Power

function pow(a,b){
    if(b == 0){
        return 1
    }

    let res = pow(a, Math.floor(b/2))

    console.log("Hello ", res);

    if(b % 2 == 0){
        return res * res
    }else{
        return a * res * res
    }
}

let res = pow(2,5)

console.log(res);