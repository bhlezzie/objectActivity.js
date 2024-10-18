// objectActivity.js

// Create an object called car with the properties type, model, and color
const car = {
    type: "Sedan",
    model: "Camry",
    color: "Blue"
};

// Use typeof to check the type of the object and log it to the console
console.log("Type of car:", typeof car); // Output: Type of car: object

// Update the type property to "Toyota" and log the updated object
car.type = "Toyota";
console.log("Updated car:", car); // Output: Updated car: { type: 'Toyota', model: 'Camry', color: 'Blue' }

// Add a new property wheels with the value 4 and log the updated object
car.wheels = 4;
console.log("Updated car with wheels:", car); // Output: Updated car with wheels: { type: 'Toyota', model: 'Camry', color: 'Blue', wheels: 4 }
