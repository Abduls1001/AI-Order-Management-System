export interface Product {
  id: string;
  sku: string;
  name: string;
  category: string;
  price: number;
  stock: "In Stock" | "Low Stock" | "Out of Stock";
  image: string;
}
