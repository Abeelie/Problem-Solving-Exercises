// add whatever parameters you deem necessary
// adding the parameter array which represents the array of integers
// adding the parameter targetAverage which represents the value to be found among the pairs
// i parameter represents the array index starting point
// j parameter represents the the array length 
const averagePair = (array, targetAverage, i = 0, j = array.length - 1) => {
    // if the array length is 0 return false which means nothing can be looped
    if(array.length === 0) return false;
    // while i is less than j
    while(i < j){
    // initializing the left and right variable to hold the values of the pairs
      let left = array[i];
      let right = array[j];
    // initializing the average to hold the left and right values
      let average = (left + right) / 2;
    // if the average is equal to the targetAverage return true the pairs was found
      if(average === targetAverage) return true;
    // if the average is greater than targetAverage decrement from the next right side value to be compared
      if(average > targetAverage) j--;
    // if the average is less than the targetAverage move the pointer to the next value from the left
      if(average < targetAverage) i++;
    }
    // if no conditions are met return false
    return false;
}

module.exports = { averagePair };