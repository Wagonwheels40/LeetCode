var topKFrequent = function(nums, k) {
// We define a function called topKFrequent that takes in two arguments: nums (an array of numbers) and k (the number of top frequent elements we want to retrieve).
    let map = {}
    // We create an empty object called map that will serve as a frequency counter for each unique element in the nums array.
    for (let num of nums) {
    // We use a for...of loop to iterate over each element (num) in the nums array.
        if (!map[num]) map[num] = 0
        // Inside the loop, we check if the num does not exist as a key in the map object. If it doesn't, we initialize it as 0.
        map[num]++
        // We increment the value of map[num] by 1, effectively counting the frequency of each element in the nums array.
    }

    return [...Object.keys(map)].sort((a,b) => map[b] - map[a]).slice(0,k)
};
    // After counting the frequencies of all elements, we convert the keys of the map object into an array using Object.keys(map). This array contains all the unique elements from the nums array.
    // We sort the array of unique elements based on their frequencies in descending order using the sort() method. The comparison function (a, b) => map[b] - map[a] ensures that elements with higher frequencies come first.
    // Finally, we use the slice(0, k) method to extract the first k elements from the sorted array. This gives us the top k most frequent elements.
    // The function returns an array with the top k most frequent elements.


/* 

[1,1,1,2,2,3], k = 2

map => freq of each unique element

{
    3: 1,
    1: 3,
    2: 2
}

[1,2,3].slice(0,2) = [1,2]

*/

/* ANOTHER SOLUTION
    var topKFrequent = function(nums, k) {

        let map = {};
        let bucket = [];
        let result = [];

        for(let i = 0; i<numbs.length; i++)
            if(!map[nums[i]]){
                map[nums[i]] = 1;
            } else {
                map[nums[i]]++;
            }
        }

        for(let [num, freq] of Object.entries(map)){
            if(!bucket[freq]){
                bucket[freq] = new Set().add(num);
            } else {
                bucket[freq] = bucket[freq].add(num);
            }
        }

        for(let i = bucket.length-1; i>= 0; i--){
            if(bucket[i]) result.push(...bucket[i]);
            if(result.length === k) break;
        }

        return result
    };
*/