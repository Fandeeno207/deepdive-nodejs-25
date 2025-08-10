// made it into a function to utilise async
async function fetchData() {
  try {
    const fs = require('fs').promises;
    const data = await fs.readFile('data.json', 'utf-8');
    const jsonData = JSON.parse(data);
    const products = jsonData.products;


    console.log("All Product Names:");
    products.forEach(p => console.log(p.name));

    const totalPrice = products.reduce((sum, p) => sum + p.price);
    console.log("Total Price of All Products:", totalPrice);

    const mostExpensive = products.reduce((max, p) => p.price > max.price ? p : max);
    console.log("Most Expensive Product:", mostExpensive);

    console.log("Products in Stock:");
    products.filter(p => p.inStock).forEach(p => console.log(p));

    const categories = [...new Set(products.map(p => p.category))];
    console.log("All Categories:", categories);

  } catch (error) {
    console.error("Error loading or processing JSON:", error);
  }
}


fetchData();


