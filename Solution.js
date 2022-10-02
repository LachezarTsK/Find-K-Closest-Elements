
/**
 * @param {number[]} input
 * @param {number} numberOfClosestElementsToFind
 * @param {number} elementToCompare
 * @return {number[]}
 */
var findClosestElements = function (input, numberOfClosestElementsToFind, elementToCompare) {
    let left = 0;
    let right = input.length - numberOfClosestElementsToFind;

    while (left < right) {
        let middle = left + Math.floor((right - left) / 2);

        if (elementToCompare - input[middle] > input[middle + numberOfClosestElementsToFind] - elementToCompare) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }

    //Alternatively, with modifying the input: 
    //return input.splice(left, numberOfClosestElementsToFind); 
    return input.slice(left, left + numberOfClosestElementsToFind);
};
