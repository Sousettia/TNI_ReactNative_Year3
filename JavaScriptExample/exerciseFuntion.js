var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//กำหนด Array ของ Product
var products = [
    { name: "Laptop", price: 50000, category: "Electronics" },
    { name: "Shirt", price: 1200, category: "Apparel" },
    { name: "Coffee Maker", price: 2500, category: "Appliances" },
];
function filterAndDiscountProducts(products, input_price) {
    return products
        .filter(function (product) { return product.price > input_price; })
        .map(function (product) { return (__assign(__assign({}, product), { price: product.price * 0.9 })); });
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
