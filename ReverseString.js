// Reversing a String in javaScript using Array Method
//Steps to follow
//Create a function to reverse a string
// Since JS does not have a method for reversing strings
// we first convert the string to an Array.That is what the split method does 
//After that we now use the .reverse method on the Array we created.
//lastly we call the .join method on the array
    
// const ReverseString = (str) => {
//     str = str.split("").reverse().join("")
//     return str
// }   
// console.log(ReverseString('eyesss'))



// Part B
//Reversing a string Using Recursion
//Steps to follow
//Create a function with one parameter
//Establish a baseline for the recursive function. That is what the if statement is doing
//Use an else statement to callback the function
//substr() is a method in JS that returns a string at the specified index
//charAT is also a string method that returns the character at the specified index
//reverseStr runs and extracts the string word(STR) one after the other until it certifies the baseline ie until there is no letter remaining
//It now adds the strings together starting with the last string to be removed by the substr method

//Below is a simple function to illustrate this

// function reverseStr(STR){
//     if (STR == ""){
//         return ""
//     }else {
//         return reverseStr(STR.substr(1)) + STR.charAt(0)
//     }
// }
// console.log(reverseStr('speech'))


//The third method of reversing a string is by using a for loop



function stringReversed(Str){
    let len = Str.length
    let newString = ""
    for (let i = 1; i<=len; i++){
        newString += (Str[len-i])
        //console.log(newString)
    }
    return(newString)
    //console.log(len)
    //return len
}
console.log(stringReversed("care"))