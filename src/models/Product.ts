export interface DiscountableProduct {
  applyDiscount(discount: number): number;
}

export class Product implements DiscountableProduct {
  private sku: string;
  public name: string;
  public price: number;
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
  getPriceWithTax(tax: number = 1) {
    return this.price & tax
  }

  applyDiscount(discount: number): number {
    return this.price * discount;
  }
}
