
//  TASK 2: function that will return the closest number in the 
//          array to the given number.



function findBestMatch(k, arr) {
    arr.sort((a, b) => Math.abs(k - a) - Math.abs(k - b));

    return arr[0]
}

console.log(findBestMatch(9, [6, 1, -4, 10, 7, 2, 4]))


