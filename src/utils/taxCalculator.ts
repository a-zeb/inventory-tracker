import { Product } from "../models/Product.ts";

// Add a function calculateTax() that accepts a Product object and returns the price including tax.
export function calculateTax(product: Product) {
    return product.getPriceWithTax()
}