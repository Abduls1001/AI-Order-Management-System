import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    sku: "NP-COR-1001",
    name: "Double Wall Corrugated Box",
    category: "Corrugated Packaging",
    price: 4.95,
    stock: "In Stock",
    image: "/images/products/carton.jpg"
  },
  {
    id: "2",
    sku: "NP-PRO-2002",
    name: "Industrial Bubble Wrap Roll",
    category: "Protective Packaging",
    price: 18.5,
    stock: "Low Stock",
    image: "/images/products/bubble-wrap.jpg"
  }
];
