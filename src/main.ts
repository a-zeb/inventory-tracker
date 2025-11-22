// Create a simple object-oriented inventory tracker using TypeScript.
// The tracker will distinguish between PhysicalProduct and DigitalProduct,
// calculate applicable taxes, and manage inventory using modules.
// This lab will reinforce the key object-oriented programming concepts learned in the last lesson,
// including inheritance, encapsulation, abstraction, and polymorphism,
// while using TypeScript features such as type annotations and interfaces.

import { Product } from "./models/Product.ts";
import { PhysicalProduct } from "./models/PhysicalProduct.ts";
import { DigitalProduct } from "./models/DigitalProduct.ts";
import { sortProductsByPrice, sortProductsByName } from "./utils/sortProducts.ts";

// Inside src/main.ts, import the PhysicalProduct and DigitalProduct classes, and create instances of both.
const items: Product[] = [
    new PhysicalProduct('123', 'T-Shirt', 10.99, 2.5),
    new DigitalProduct('124', 'Gift Card', 20, 125),
]
sortProductsByPrice(items)

// Use a loop to display the details of each product, calculate prices with tax, and display the final prices.
// Hint: Utilize polymorphism to your advantage here.
for (const item of items) {
    console.log("Sorted by price: ")
    console.log(item.displayDetails())
    console.log("Final price:", item.getPriceWithTax())
}

console.log()
sortProductsByName(items)
for (const item of items) {
    console.log("Sorted by name: ")
    console.log(item.displayDetails())
    console.log("Final price:", item.getPriceWithTax())
}

console.log()
const p = new PhysicalProduct('123', 'T-Shirt', 10.99, 2.5);
const total = p.getPriceWithBulkDiscount(12);
console.log("Total with discount: ", total);
