// Example 1.1: Using for...in and Object.keys()
const userProfile = {
    name: "Jane Doe",
    age: 30,
    city: "New York",
    isActive: true
};

for (let key in userProfile) {
    if (userProfile.hasOwnProperty(key)) { // Good practice to filter prototype properties
        console.log(`${key}: ${userProfile[key]}`);
    }
}
// Expected:
// name: Jane Doe
// age: 30
// city: New York
// isActive: true

Object.keys(userProfile).forEach(key => {
    console.log(`${key}: ${userProfile[key]}`);
});
// Expected (same as above):
// name: Jane Doe
// age: 30
// city: New York
// isActive: true


// Example 1.2: Using Object.entries()
const product = {
    id: "P001",
    name: "Laptop",
    price: 1200,
    currency: "USD"
};

for (const [key, value] of Object.entries(product)) {
    console.log(`${key}: ${value}`);
}
// Expected:
// id: P001
// name: Laptop
// price: 1200
// currency: USD

// --- Traversing Nested Objects ---

// Example 2.1: Dot/Bracket Notation with Optional Chaining
const companyData = {
    name: "Tech Solutions Inc.",
    address: {
        street: "123 Innovation Dr",
        city: "Techville",
        zip: "90210"
    },
    departments: [
        { name: "Engineering", manager: { firstName: "Alice", lastName: "Smith" } },
        { name: "HR", manager: { firstName: "Bob", lastName: "Johnson" } }
    ],
    contacts: null // Example of a potentially missing property
};

console.log("Company Name:", companyData.name);
// Expected: Company Name: Tech Solutions Inc.

console.log("Street:", companyData.address.street);
// Expected: Street: 123 Innovation Dr

console.log("Engineering Manager:", companyData.departments[0].manager.firstName);
// Expected: Engineering Manager: Alice

console.log("HR Manager Last Name:", companyData.departments[1].manager.lastName);
// Expected: HR Manager Last Name: Johnson

// Safely access a potentially missing property using optional chaining
console.log("CEO Name (optional):", companyData.executive?.ceo?.name);
// Expected: CEO Name (optional): undefined

console.log("Contacts (optional):", companyData.contacts?.email);
// Expected: Contacts (optional): undefined


// Example 2.2: Recursive Traversal
const configData = {
    app: {
        name: "My App",
        version: "1.0.0",
        settings: {
            theme: "dark",
            notifications: true,
            api: {
                endpoint: "https://api.example.com/v1",
                key: "abc123xyz"
            }
        }
    },
    user: {
        id: 123,
        profile: {
            email: "user@example.com",
            preferences: {
                language: "en",
                timezone: "UTC"
            }
        }
    },
    status: "active"
};

function logAllStringValues(obj, path = '') {
    for (const key in obj) {
        const currentPath = path ? `${path}.${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            logAllStringValues(obj[key], currentPath);
        } else if (typeof obj[key] === 'string') {
            console.log(`${currentPath}: ${obj[key]}`);
        }
    }
}

console.log("All string values in configData:");
logAllStringValues(configData);
// Expected:
// app.name: My App
// app.version: 1.0.0
// app.settings.theme: dark
// app.settings.api.endpoint: https://api.example.com/v1
// app.settings.api.key: abc123xyz
// user.profile.email: user@example.com
// user.profile.preferences.language: en
// user.profile.preferences.timezone: UTC
// status: active


// --- Array Iteration ---

// Example 3.1: Using forEach()
const itemPrices = [10.50, 25.00, 5.75, 12.00];

console.log("Logging each item price:");
itemPrices.forEach((price, index) => {
    console.log(`Item ${index + 1}: $${price.toFixed(2)}`);
});
// Expected:
// Item 1: $10.50
// Item 2: $25.00
// Item 3: $5.75
// Item 4: $12.00


// Example 3.2: Using map() and filter()
console.log("\n--- Array Iteration (Example 3.2: map() & filter()) ---");
const temperatures = [18, 22, 15, 28, 20, 30]; // Temperatures in Celsius

// Map: Convert Celsius to Fahrenheit
const fahrenheitTemps = temperatures.map(tempC => (tempC * 9/5) + 32);
console.log("Temperatures in Fahrenheit:", fahrenheitTemps);
// Expected: Temperatures in Fahrenheit: [64.4, 71.6, 59, 82.4, 68, 86]

// Filter: Get temperatures above 20 Celsius
const warmTempsC = temperatures.filter(tempC => tempC > 20);
console.log("Warm temperatures (Celsius > 20):", warmTempsC);
// Expected: Warm temperatures (Celsius > 20): [22, 28, 30]