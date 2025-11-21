export interface DiscountableProduct {
  applyDiscount(price: number, discount: number): number;
}

export class Product implements DiscountableProduct {
  private sku: string;
  name: string;
  price: number;
  constructor(sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }

  // displayDetails() - a method that returns a formatted string with the product’s details.
  displayDetails() {
    return `Sku: ${this.sku}, Name: ${this.name}, Price: ${this.price}`;
  }

  // getPriceWithTax() - a method that calculates the final price of the product with tax.
  getPriceWithTax() {
    return this.price * 1.08;
  }

  applyDiscount(price: number, discount: number): number {
    return price * discount;
  }
}
