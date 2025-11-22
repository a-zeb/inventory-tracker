import { Product } from "../models/Product.ts";

// Implement a module to handle sorting products by price or by name.
export function sortProductsByPrice(items: Product[]): Product[] {
    items.sort((a, b) => a.price - b.price)
    return items;
}

export function sortProductsByName(items: Product[]): Product[] {
    items.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        return 0;
    });
    return items;
}

