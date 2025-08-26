function getSecondLargest(numbers) {
    // Complete the function
    numbers.sort((a, b) => a-b)
    let biggestNum = numbers[numbers.length - 1]
    while (numbers[numbers.length - 1] === biggestNum) {
        numbers.pop()
    }
    return numbers[numbers.length - 1]
}
