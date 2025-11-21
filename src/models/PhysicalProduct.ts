import { Product } from "./Product.ts";

export class PhysicalProduct extends Product {
  weight: number;
  constructor(sku: string, name: string, price: number, weight: number) {
    super(sku, name, price);
    this.weight = weight;
  }

  // Override the getPriceWithTax() method to calculate a final price that includes a 10% tax rate.
  getPriceWithTax() {
    return this.price * 1.1;
  }

  //   Use a getter method to return the formatted weight in kilograms (e.g. “2.5 kg”).
  getWeight() {
    return `${this.weight} kg.`
  }
}