function vowelsAndConsonants(s) {
    let vowels = []
    let nonVowels = []
    for (let i = 0; i < s.length; i++) {
        if (["a","e","i","o","u"].includes(s[i])) {
            vowels.push(s[i])
        }
        else {
            nonVowels.push(s[i])
        }
    }
    for (let i = 0; i < vowels.length; i++) {
        console.log(vowels[i])
    } 
    for (let i = 0; i < nonVowels.length; i++) {
        console.log(nonVowels[i])
    } 
}
vowelsAndConsonants("hello, master.")