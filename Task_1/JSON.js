const fs = require('fs').promises;
async function fetchData() {
  try {
    const data = await fs.readFile('data.json', 'utf-8');
    const jsonData = JSON.parse(data);
    const products = jsonData.products;


    console.log("All Product Names:");
    products.forEach(p => console.log(p.name));

    const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
    console.log("Total Price of All Products:", totalPrice);

    const mostExpensive = products.reduce((max, p) => p.price > max.price ? p : max, products[0]);
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