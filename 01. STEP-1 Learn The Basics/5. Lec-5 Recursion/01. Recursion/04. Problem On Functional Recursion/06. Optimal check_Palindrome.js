
// check Palindrome Optimal 

function checkPalindrome(s,i){
    if(i < Math.floor(s.length/2)){
        if(s[i] != s[s.length-1-i]){
            return "Not a Palindrome"
        }else{
            return checkPalindrome(s,i+1)
        }
    }else{
        return "string is Palindrome"
    }
}


let s1 = "madam"

let res = checkPalindrome(s1.split(""), 0)

console.log(res);