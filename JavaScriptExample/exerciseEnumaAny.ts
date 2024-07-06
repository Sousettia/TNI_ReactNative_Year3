// การกำหนด enum สำหรับสถานะสินค้า
enum ProductStatus {
  Available = "Available",
  OutofStock = "Out of Stock",
  Discontinued = "Discontinued",
}

// การกำหนด array ของสินค้าใช้ชนิดข้อมูล any
let products: any[] = [
  { name: "Laptop", status: ProductStatus.Available, price: 1200 },
  { name: "Smartphone", status: ProductStatus.OutofStock, price: 700 },
  { name: "Tablet", status: ProductStatus.Discontinued, price: 300 },
];

//ฟังกฺชั่นสำหรับแสดงข้อมูลสินค้า
function displayProductDetails(products: any[]) {
  products.forEach((product) => {
    console.log(
      `Product: ${product.name}, Status: ${product.status}, Price: ${product.price}`
    );
  });
}

displayProductDetails(products);
