// add whatever parameters you deem necessary
const countPairs = (array, targetSum, i = 0, j = array.length-1) => {
    // sorting the array using insertion sort to align the array values from
    // least to greatest. This helps count the pairs properly.
    let sortedArray = insertionSort(array);
    // initializing the count to zero. This is to be used to hold the count of pairs
    // whose sum equals the targetSum
    let count = 0;
    // if the array length is 0 return 0 which means nothing can be looped
    if(array.length === 0) return 0;
    // while i is less than j
    while(i < j){
    // initializing the left and right variable to hold the values of the pairs
        let left = sortedArray[i];
        let right = sortedArray[j];
    // initializing the sum to hold the left and right values
        let sum = left + right;
    // if the sum is equal to the targetSum count the pairs, decrement the right side and increment the left side
        if(sum === targetSum) {count++; j--;i++;}
    // if the average is greater than targetSum decrement from the right side value to be compared
        if(sum > targetSum) j--;
    // if the average is less than the targetSum move the pointer to the next value from the left
        if(sum < targetSum) i++;
    }
    return count;
}


const insertionSort = (array) => {
    // i starts with index 1 because theres nothing at the left of index 0
    for (let i = 1; i < array.length; i++) {
        /** j is set to i to start the index
            j is decrementing to compare all values on the left
            once all values on the left are compared, 
            j is equal to 0 and loop stops until next increment on i
        */
        for (let j = i; j > 0; j--) {
            // if value at index j is less than the value on the left swap the position
            if(array[j] < array[j-1]){
                let temp = array[j];
                array[j] = array[j-1];
                array[j-1] = temp;
            }
        }
    }
    // return array when the sorting is done
    return array;
}





module.exports = { countPairs };