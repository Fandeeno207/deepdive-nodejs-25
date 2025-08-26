function getSecondLargest(numbers) {
    // Complete the function
    numbs.sort((a, b) => a-b)
    let biggestNum = numbs[numbs.length - 1]
    while (numbs[numbs.length - 1] === biggestNum) {
        numbs.pop()
    }
    return numbs[numbs.length - 1]
}
