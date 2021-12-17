// add whatever parameters you deem necessary
// passing in the array arguement which is the user input and the 
// i as the index to be used in the while loop
const separatePositive = (array, i=0) => {
    // while i is less than array length
    while (i < array.length) {
        // if the current value is greater than 0
        if(array[i] > 0) {
            // assign the variable value to the current value in loop and
            // use splice to add that value into the first index in the array
            let value = array.splice(i, 1);
            array.splice(0, 0, value[0]); 
        }
        // increment the loop
        i++
    }
    return array;
}





module.exports = { separatePositive };