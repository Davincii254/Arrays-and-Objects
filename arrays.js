// Push and Pop
let dishes = ["Ugali", "Nyama Choma", "Chapati"];
dishes.push("Mandazi"); // Add item to the end
console.log(dishes); // ["Ugali", "Nyama Choma", "Chapati", "Mandazi"]

dishes.pop(); // Remove the last item
console.log(dishes); // ["Ugali", "Nyama Choma", "Chapati"]

// Shift Unshift
let drinks = ["Tea", "Coffee", "Juice"];
drinks.shift(); // Remove the first item
console.log(drinks); // ["Coffee", "Juice"]

drinks.unshift("Soda"); // Add an item to the beginning
console.log(drinks); // ["Soda", "Coffee", "Juice"]


// Map
let prices = [50, 100, 150];
let discountedPrices = prices.map(price => price * 0.9); // Apply 10% discount
console.log(discountedPrices); // [45, 90, 135]

// Filter
let temperatures = [18, 24, 30, 16, 25];
let warmDays = temperatures.filter(temp => temp > 20); // Days above 20°C
console.log(warmDays); // [24, 30, 25]

// Reduce
let expenses = [200, 300, 150];
let totalExpense = expenses.reduce((sum, expense) => sum + expense, 0);
console.log(totalExpense); // 650

// find
let foods = ["Chapati", "Sukuma Wiki", "Nyama Choma"];
let foundFood = foods.find(food => food === "Nyama Choma");
console.log(foundFood); // "Nyama Choma"

// slice
let people = ["Alice", "Brian", "Cynthia", "David"];
let selected = people.slice(1, 3); // Get items from index 1 to 2
console.log(selected); // ["Brian", "Cynthia"]


// Spllice
let students = ["Mary", "John", "Peter"];
students.splice(1, 1, "Jane"); // Replace "John" with "Jane"
console.log(students); // ["Mary", "Jane", "Peter"]
