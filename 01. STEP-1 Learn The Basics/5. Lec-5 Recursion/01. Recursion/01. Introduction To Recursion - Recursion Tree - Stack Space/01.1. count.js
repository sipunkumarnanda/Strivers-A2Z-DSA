
let count = 0 

function print(){
    if(count == 4) return
    
    console.log(count);
    count++
    print()
}

print()