const foodPrices = {
    Ugali: 50,
    NyamaChoma: 250,
    Chapati: 20,
    SukumaWiki: 30
};

// Iterating over keys
for (let food in foodPrices) {
    console.log(`${food}: KES ${foodPrices[food]}`);
}

// Extracting keys and values
let keys = Object.keys(foodPrices);
let values = Object.values(foodPrices);

console.log("Foods:", keys); // ["Ugali", "NyamaChoma", "Chapati", "SukumaWiki"]
console.log("Prices:", values); // [50, 250, 20, 30]


// Iterating over key-value pairs
Object.entries(foodPrices).forEach(([food, price]) => {
    console.log(`${food}: KES ${price}`);
});
