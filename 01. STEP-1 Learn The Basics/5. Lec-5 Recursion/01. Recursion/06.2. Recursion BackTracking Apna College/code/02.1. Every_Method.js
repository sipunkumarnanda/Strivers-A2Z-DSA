
// Every method in array 

/*
array.every((element, index, array) => {
  // return true or false
})
  */


// let arr = [1,2,3,4,5,6,7,8,9,10]
let arr = [2,4,6,8,10]

let isEven = arr.every((value, index)=>{
    return value % 2 == 0
})

if(isEven){
    console.log("All array elemets are even");
}else{
    console.log("Even and odd Mix");
}

