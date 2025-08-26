function vowelsAndConsonants(s) {
    let vows = []
    let nonVowels = []
    for (let i = 0; i < s.length; i++) {
        if (["a","e","i","o","u"].includes(s[i])) {
            vows.push(s[i])
        }
        else {
            vows.push(s[i])
        }
    }
    for (let i = 0; i < vows.length; i++) {
        console.log(vows[i])
    } 
    for (let i = 0; i < nonVowels.length; i++) {
        console.log(nonVowels[i])
    } 
}
vowelsAndConsonants("hello, master.")