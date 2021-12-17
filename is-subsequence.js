// add whatever parameters you deem necessary
// adding the string1 and string2 arguments which comes from the user input
// adding the str1index=0 and str2index=0 to get the values of the char in the string
// based on the condition
// adding j arguement to hold the value of string2.length
const isSubsequence = (string1, string2, str1index=0, str2index=0, j=string2.length) => {
    // while the str2index is less than j
    while(str2index < j){
    // if string2[str2index] value is equal to string1[str1index increment the 
    // str1index to move to the next value of string1
        if(string2[str2index] === string1[str1index]) str1index++; 
    // if str1index equals string1.length return true
    // this means all the letters in string1 were found in string2
        if(str1index === string1.length) return true;
    // increment the str2index to move to the next value of string2
        str2index++
    }
    // return false if str1index does not equal string1.length
    // this means all the letters in string1 were not found in string2
    return false;
}


module.exports = { isSubsequence };