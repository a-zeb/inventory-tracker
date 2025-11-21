// displayDetails() - a method that returns a formatted string with the product’s details.
// getPriceWithTax() - a method that calculates the final price of the product with tax.

class Product {
  sku: string;
  name: string;
  price: number;
  constructor(sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }

  displayDetails() {
    let productDetails = `Sku: ${this.sku}, Name: ${this.name}, Price: ${this.price}`;
    return productDetails;
  }

  getPriceWithTax() {
    let priceWithTax = this.price * 1.08;
    return priceWithTax;
  }
}
