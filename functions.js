// Function to calculate matatu fare
function calculateFare(distance) {
    const baseFare = 50; // Starting fare
    const perKmRate = 10; // Cost per kilometer

    // Calculate total fare
    let totalFare = baseFare + distance * perKmRate;

    return `Your matatu fare for ${distance} km is KES ${totalFare}.`;
}

// Call the function with a sample distance
console.log(calculateFare(15)); // Distance: 15 km

// Function to check if a dish is available
function isDishAvailable(menu, dish) {
    return menu.includes(dish)
        ? `${dish} is available!`
        : `${dish} is not on the menu today.`;
}

// Sample menu and query
const menu = ["Ugali", "Nyama Choma", "Sukuma Wiki", "Chapati"];
console.log(isDishAvailable(menu, "Nyama Choma")); // Should return "available"
console.log(isDishAvailable(menu, "Fish")); // Should return "not available"


// Function to convert temperature
function convertTemperature(temp, unit) {
    if (unit === "C") {
        return `${temp}°C is ${(temp * 9) / 5 + 32}°F.`;
    } else if (unit === "F") {
        return `${temp}°F is ${((temp - 32) * 5) / 9}°C.`;
    } else {
        return "Invalid unit! Use 'C' for Celsius or 'F' for Fahrenheit.";
    }
}

// Convert temperatures
console.log(convertTemperature(30, "C")); // 30°C to Fahrenheit
console.log(convertTemperature(86, "F")); // 86°F to Celsius


// Function to split a bill
function splitBill(totalAmount, numberOfFriends) {
    if (numberOfFriends <= 0) {
        return "Number of friends must be at least 1!";
    }
    let share = totalAmount / numberOfFriends;
    return `Each friend pays KES ${share.toFixed(2)}.`;
}

// Split a bill for lunch
console.log(splitBill(1500, 5)); // Total: 1500, Friends: 5
console.log(splitBill(800, 0)); // Invalid case
