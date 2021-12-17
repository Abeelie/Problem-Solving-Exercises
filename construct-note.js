// add whatever parameters you deem necessary
const constructNote = (message, letters) => {
    // if the message length is zero return true as test conditions indicate
    if(message.length === 0) return true;
    // if the letters length is less than the message length return false because
    // it would not be possible to create a message from letters that are not present
    // in the letters array
    if(letters.length < message.length) return false;
    // storing the frequency count of the message in messageResult
    const messageResult = frequencyCounter(message);
    // storing the frequency count of the letters in lettersResult
    const lettersResult = frequencyCounter(letters);
    // using a for of loop to loop through the object keys of messageResult
    for (let char of Object.keys(messageResult)) {
        // if the messageResult[char] frequency number is greater than 
        // lettersResult[char] return false because that means the message
        // has letters that are more or not in letters arguement
        if (messageResult[char] > lettersResult[char]) return false; 
    }
    // return true if messageResult[char] < lettersResult[char] or they are equal amount
    return true;
}


// this function counts the frequency of chars in the parameter value
const frequencyCounter = (array) => {
    // initializing the frequencies variable to hold total frequency of chars
    let frequencies = {};
    // looping through the array of chars
    for (let value of array) {
        // if value not present in frequencies object add it
        if(!frequencies[value]) frequencies[value] = 0;
        // increment occurences found
        frequencies[value]++;
    }
    return frequencies;
}


module.exports = { constructNote };