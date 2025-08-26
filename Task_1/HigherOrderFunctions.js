let products = [
  { name: "Head", ratings: [4, 5, 4]},
  { name: "Phone", ratings: [3, 3.5, 4] },
  { name: "Smart", ratings: [5, 4.5, 4.75]},
];
function calculateAverage(ratings) {
    let sum = 0
    for (let i = 0; i< ratings.length;i++) {
        sum+=ratings[i];
    }
    let averageRating = sum/ratings.length
    return averageRating;
}

products.map((el) => {
    el.popular = calculateAverage(el.ratings) > 4
})
console.log(products)

let results = products.filter((el) => {
    return calculateAverage(el.ratings) > 4
});


results.sort((a,b) =>{
    return calculateAverage(a.ratings) - calculateAverage(b.ratings) 
})
let finalMessage = "Popular Products: ["
for(let i = 0; i < results.length; i++) {
    finalMessage+=`"${results[i].name}", `
}
console.log(finalMessage.substring(0, finalMessage.length-2) + "]");
// from fady ashraf with love
