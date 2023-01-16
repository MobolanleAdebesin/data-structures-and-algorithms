// This did not work. 
function naiveSearch(longString, shortString) {
    let count = 0
    for (let i = 0; i < longString.length; i++) {
        for (let j = 0; j < shortString.length; j++) {
            if (longString[i + j] !== shortString[j]) {
                break;
            }
            count += 1
        }
    }
    return count
}


//Colt's version 

function NaiveSearch(long, short) {
    let count = 0
    for (let i = 0; i < long.length; i++) {
        for (j = 0; j < short.length; j++) {
            console.log(short[j], long[i + j])
            if (short[j] !== long[i + j]) {
                console.log("BREAK!")
                break;
            }
            if (j === short.length - 1) {
                console.log("FOUND ONE")
                count++

            }
        }
    }
    return count;
}

naiveSearch("lorie loled", 'lol')

NaiveSearch("lorie loled", 'lol')