// An array of counties in Kenya
const counties = ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret"];

// Adding and removing counties
counties.push("Machakos"); // Add a county at the end
counties.shift(); // Remove the first county

console.log(counties); // ["Mombasa", "Kisumu", "Nakuru", "Eldoret", "Machakos"]


// An object representing a matatu route
const matatuRoute = {
    name: "Route 34",
    start: "Kikuyu",
    end: "CBD",
    stops: ["Dagoretti", "Kawangware", "Ngong Road", "Yaya Center"],
    fare: 100
};

// Accessing and modifying object properties
matatuRoute.fare += 20; // Increase fare
matatuRoute.stops.push("Upper Hill"); // Add a new stop

console.log(matatuRoute);
