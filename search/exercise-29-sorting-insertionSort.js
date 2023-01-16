/**
 * UEBSL 
 * Understand 
 * 1. MOW: Sort an array using the insertionSort Method 
 * 2. input: unsorted array 
 * 3. output: sorted array 
 * 4. The output can be determined from the input 
 * 5. Data Labels: 
 *      a. pointer called unsorted to increment through the unsorted array portion 
 *      b. pointer called sorted to increment through the sorted portion and determine where the current element should go 
 *      c. variable cur --> for the current element 
 * 
 * Explore Examples: 
 * 
 *      [5, 6, 8, 4] --> [4,5,6,8]
 *      [24, 100, 32, 85, 77, 10, 5] --> [5,10,24,32,77,85,100]
 *      [1000, 2000, 90, 5, 45, 3000] --> [5,45,90,1000,2000,3000]
 * 
 * Break It Down 
 * 1. Start by picking the second element in the array 
 * 2. Compare the second element to the one before it and swap if necessary 
 * 3. Continue to the next element in the array and if it is in the incorrect order, iterate through te sorted portion (the left side)
 * to place the element in the correct place 
 * 4. Repeat until the array is sorted. 
 * Simplify/Solve
 * Look Back and Refactor 
 */

function insertionSort(arr) {
    function swap(arr, idx1, idx2) {
        let temp = arr[idx2]
        /**
        * starting from the unsorted index until i; each element is shifted one to the right so temp = arr[unsorted] (idx2)
        * (e.g. the value at arr[3] is replaced with the value at arr[2] and so on)
        */
        for (let i = idx2; i > idx1; i--) {
            arr[i] = arr[i - 1]
        }
        // Finally, the value at the first index has been shifted and the new value is the value stored in temp. 
        arr[idx1] = temp

    }
    let sort = 0
    let unsort = 1
    while (unsort < arr.length) {
        if (arr[unsort] < arr[sort]) {
            if (arr[unsort] < arr[0]) {
                swap(arr, 0, unsort)
            } else {
                // if arr[unsort] is less than arr[sort], then arr[unsort] needs to be swapped. The question is, where should it go? 
                for (let i = sort - 1; i > -1; i--) {
                    /**
                 * We already know that the value at arr[unsort] is less than arr[sort]. 
                 * Now, we want to figure out where it belongs. We can ask: 
                 *  is arr[sort] less than arr[sort-1]
                 * is arr[sort] less than arr[sort-2] etc. but both of these could be true and we still wouldn't know where it belongs. 
                 * So instead we ask, is arr[sort] greater than arr[sort-1]? if so it should come after it. 
                 */

                    if (arr[unsort] > arr[i] && arr[unsort] < arr[i + 1]) {
                        swap(arr, i + 1, unsort)
                    }
                }
            }
        }
        // if arr[unsort] is NOT less than arr[sort] we can move on and each should be incremented 
        sort++
        unsort++
    }

    return arr
}

function insertionSort(arr) {
    function swap(arr, idx1, idx2) {
        let temp = arr[idx2]
        for (let i = idx2; i > idx1; i--) {
            arr[i] = arr[i - 1]
        }
        arr[idx1] = temp

    }
    let sort = 0
    let unsort = 1
    while (unsort < arr.length) {
        if (arr[unsort] < arr[sort]) {
            if (arr[unsort] < arr[0]) {
                swap(arr, 0, unsort)
            } else {
                for (let i = sort - 1; i > -1; i--) {
                    if (arr[unsort] > arr[i] && arr[unsort] < arr[i + 1]) {
                        swap(arr, i + 1, unsort)
                    }
                }
            }
        }
        sort++
        unsort++
    }

    return arr
}

console.log(insertionSort([5, 7, 8, 4]))
console.log(insertionSort([24, 100, 32, 85, 77, 10, 5]))
console.log(insertionSort([1000, 2000, 90, 5, 45, 3000]))
// [24, 32, 85, 100, 77, 10, 5]
/**      j           i
 * 
 
 */
// Colt's Solution 

function coltInsertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var currentVal = arr[i]
        for (var j = i - 1; j >= 0 && arr[j] > arr[i]; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal
    }

    return arr;
}