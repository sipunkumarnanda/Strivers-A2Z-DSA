
// check a bit is set or not 

let x = 101; // number in decimal
let k = 2;   // check if 2nd bit is set (0-based from right)

if ((x & (1 << k)) !== 0) {
    console.log("Set");
} else {
    console.log("Not set");
}