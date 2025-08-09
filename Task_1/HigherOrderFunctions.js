let products = [
  { name: "Headphones", ratings: [4, 5, 4]},
  { name: "Phone Case", ratings: [3, 3.5, 4] },
  { name: "Smartwatch", ratings: [5, 4.5, 4.75]},
];
function calculateAverage(ratings) {
    let sum = 0
    for (let i = 0; i< ratings.length;i++) {
        sum+=ratings[i];
    }
    let averageRating = sum/ratings.length
    return averageRating;
}
for (let i = 0; i < products.length;i++) {
    if (calculateAverage(products[i].ratings) > 4) {
        products[i].popular = true
    }
    else {
        products[i].popular = false

    }
}
let results = [];
for (let i = 0; i < products.length;i++) {
    console.log(`${products[i].name}: Average = ${calculateAverage(products[i].ratings)}, popular = ${products[i].popular}`)
}
for (let i = 0; i < products.length;i++) {
    if (calculateAverage(products[i].ratings) > 4) {
        results.push(products[i])
    }
}
results.sort((a,b) =>{
    return calculateAverage(a.ratings) - calculateAverage(b.ratings) 
})
let finalMessage = "Popular Products: ["
for(let i = 0; i < results.length; i++) {
    finalMessage+=`"${results[i].name}", `
}
console.log(finalMessage.substring(0, finalMessage.length-2) + "]");