function getLetter(s) {
    let letter;
    // Write your code here
    let arrA = ["a","e","i","o","u"]
    let arrB = ["b","c","d","f","g"]
    let arrC = ["h","j","k","l","m"]
    let arrD = ["n","p","q","r","s","t","v","w","x","y","z"]
    let char = s[0]
    if (arrA.includes(char)) {
        letter = "A"
    }
    else if (arrB.includes(char)) {
        letter = "B"
    }
    else if (arrC.includes(char)) {
        letter = "C"
    }
    else if (arrD.includes(char)) {
        letter = "D"
    }
    return letter;
}
