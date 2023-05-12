/**
 * @param {string[]} strs
 * @return {string[][]}
 */
//special comment which is 
//used to document the function's parameters.  
//So the function takes an array of strings 
//'strs' as an input and returns an array of array of strings

var groupAnagrams = function(strs) {
// a new function is defined.  It sets it equal to an anonymous 
// function with one argument - an array of strings called 'strs'
    let sorted = strs.map((str) => str.split("").sort().join(""));
// Line creates a new array called sorted by iterating through each string
// in the 'strs'' array and performing the following operations
// `str.split("")`: splits the string into an array of characters
// `.sort()`: sorts characters in alphabetical order
// `.join("")`: joins characters back together into a string
// This creates an array of sorted strings that correspond to the original strings in strs.

    let map = {};
// This line creates a new empty object called map that we will use to group together anagrams.


    for(let i = 0; i<sorted.length; i++){
// This line starts a loop that iterates through each element in the sorted array.
        if(!map[sorted[i]]){
// This line checks if the current sorted string sorted[i] exists as a 
// key in the map object. The ! symbol means "not", so !map[sorted[i]] means "if map[sorted[i]] does not exist".
            map[sorted[i]] = [strs[i]];
// If the current sorted string doesn't exist in map, this line creates a new key-value pair in the map object where the key is the current sorted string and the value is an 
// array containing the corresponding original string from strs.
        } else {
            map[sorted[i]].push(strs[i]);
        }
    }
    return Object.values(map);
};