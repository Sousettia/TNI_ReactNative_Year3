type Product = {
  name: string;
  price: number;
  category: string;
};

//กำหนด Array ของ Product
let products: Product[] = [
  { name: "Laptop", price: 50000, category: "Electronics" },
  { name: "Shirt", price: 1200, category: "Apparel" },
  { name: "Coffee Maker", price: 2500, category: "Appliances" },
];

function filterAndDiscountProducts(
  products: Product[],
  input_price: number
): Product[] {
  return products
    .filter(product => product.price > input_price)
    .map(product => ({...product,price: product.price * 0.9,}));
}

console.log(filterAndDiscountProducts(products, 40000));

// const output = filterProducts(products,1300);
// const pricefixed_products = products.map(newprice => newprice.price * 0.90);

/*

// TEACHER VERSIO

type Product = {
  name: string;
  price: number;
  category: string;
};

//กำหนด Array ของ Product
let products: Product[] = [
  { name: "Laptop", price: 50000, category: "Electronics" },
  { name: "Shirt", price: 1200, category: "Apparel" },
  { name: "Coffee Maker", price: 2500, category: "Appliances" },
];

//สร้างฟังก์ชั่นชื่อ filterProductByPrice สำหรับกรองข้อมูลผลิตภัณฑ์ตามราคาที่กำหนด

function filterProductByPrice(product:Product[]):Product[]{
  return product.filter(product => product.price > 10000);
}

//สร้างฟังก์ชั่นชื่อ discountProduct ใช้สำหรับลดราคาสินค้า 10%

function discountProduct(products:Product[]):Product[]{
  return products.map(product => ({...product,price:product.price * 0.09}));
}

let filterProduct = filterProductByPrice(products);
let discountProducts = discountProduct(filterProduct);

console.log(discountProducts);
*/