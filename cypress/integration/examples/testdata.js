import { name, internet, address } from 'faker';

// Import the faker.js library

// Example usage of faker.js to generate random test data
const randomName = name.findName(); // Generates a random name
const randomEmail = internet.email(); // Generates a random email
const randomAddress = address.streetAddress(); // Generates a random address

// Log the generated data
console.log('Random Name:', randomName);
console.log('Random Email:', randomEmail);
console.log('Random Address:', randomAddress);

// Exporting the generated data for use in other files
export default {
    randomName,
    randomEmail,
    randomAddress
};