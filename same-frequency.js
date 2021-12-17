// add whatever parameters you deem necessary
const sameFrequency = (num1, num2) => {
    // storing the frequency count of the num1 in num1FrequencyCount
    const num1FrequencyCount = frequencyCounter(num1);
    // storing the frequency count of the num2 in num2FrequencyCount
    const num2FrequencyCount = frequencyCounter(num2);

    for (let c of Object.keys(num1FrequencyCount)) {
        // if the num1FrequencyCount[c] frequency number is not equal to 
        // num2FrequencyCount[c] return false because this means num1
        // and num2 do not have the same frequency count
        if (num1FrequencyCount[c] !== num2FrequencyCount[c]) return false; 
    }
    // return true num1FrequencyCount[c] and num2FrequencyCount[c] frequency count
    // are equal 
    return true;
}


// this function counts the frequency of num in the parameter value
const frequencyCounter = (num) => {
    // turning the num arguement into array to loop through it
    let arrayConversion = String(num).split("");
    // initializing the frequencies variable to hold total frequency of num
    let frequencies = {};
    // looping through the array of num
    for (let value of arrayConversion) {
        // if value not present in frequencies object add it
        if(!frequencies[value]) frequencies[value] = 0;
        // increment occurences found
        frequencies[value]++;
    }
    return frequencies;
}


module.exports = { sameFrequency };