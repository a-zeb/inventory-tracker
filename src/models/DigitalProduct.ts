import { Product } from "./Product.ts";

export class DigitalProduct extends Product {
  fileSize: number;
  constructor(sku: string, name: string, price: number, fileSize: number) {
    super(sku, name, price);
    this.fileSize = fileSize;
  }

  // Override the getPriceWithTax() method to calculate a final price with no tax, since the digital products do not require tax.
  getPriceWithTax() {
    return this.price
  }

  // Use a getter method to return the formatted file size in megabytes.
  getFileSize() {
    return this.fileSize;
  }
}
