// Create a simple object-oriented inventory tracker using TypeScript.
// The tracker will distinguish between PhysicalProduct and DigitalProduct,
// calculate applicable taxes, and manage inventory using modules.
// This lab will reinforce the key object-oriented programming concepts learned in the last lesson,
// including inheritance, encapsulation, abstraction, and polymorphism,
// while using TypeScript features such as type annotations and interfaces.

import { PhysicalProduct } from "./models/PhysicalProduct.ts";
import { DigitalProduct } from "./models/DigitalProduct.ts";

// Inside src/main.ts, import the PhysicalProduct and DigitalProduct classes, and create instances of both.
let tShirt: PhysicalProduct = new PhysicalProduct('123', 'T-Shirt', 10.99, 2.5)
let giftCard: DigitalProduct = new DigitalProduct('124', 'Gift Card', 20, 125)

// Use a loop to display the details of each product, calculate prices with tax, and display the final prices.
// Hint: Utilize polymorphism to your advantage here.
console.log(tShirt.displayDetails())
