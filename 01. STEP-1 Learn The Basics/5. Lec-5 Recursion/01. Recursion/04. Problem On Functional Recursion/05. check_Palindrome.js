
// check if a string is Palindrome or not ? 

// What is Palindrome ? 
// a string on reversal reads the same .



function checkPalindrome(s, s1copy, i){
    if(i < Math.floor(s.length/2)){
        let temp = s[i]
        s[i] = s[s.length-1-i]
        s[s.length-1-i] = temp

        return checkPalindrome(s, s1copy, i+1)
    }else{
        if(s.join("") == s1copy){
            return "Palindrome"
        }else{
            return "Not a Palindrome"
        }
    }
}


let s1 = "madam"
let s1copy = s1

let res = checkPalindrome(s1.split(""), s1copy, 0)

console.log(res);