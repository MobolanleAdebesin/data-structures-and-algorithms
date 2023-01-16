function linearSearch(arr, num) {
    for (let i in arr) {
        if (arr[i] === num) return parseInt(i)
    }
    return -1
}

// This has a time complexity of O(N)
