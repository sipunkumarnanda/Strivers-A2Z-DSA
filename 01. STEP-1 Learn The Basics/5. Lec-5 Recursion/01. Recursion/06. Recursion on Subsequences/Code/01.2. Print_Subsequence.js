
// Print subsequence using power set 

let s = "abc"

for(let i = 0 ; i< (1<<s.length) ; i++){
    let sub = ""
    for(let j=0; j<s.length; j++){
        if((i & (1<<j) )!== 0){
            sub += s[j]
        }
    }
    console.log(sub);
}

console.log(1<<0);
console.log(2 & (1<<1));
