// add whatever parameters you deem necessary
// adding the keys and values arguements
// adding the i arguement to use in the while loop
const twoArrayObject = (keys, values, i=0) => {
    // initializing the object to be used to store the key value pairs
    let object = {};
    // while i is less than keys.length
    while(i < keys.length){
        // the object key is equal to the value or null
        object[keys[i]] = values[i] || null;
        // increment the while loop
        i++
    }
    return object;
}


module.exports = { twoArrayObject };