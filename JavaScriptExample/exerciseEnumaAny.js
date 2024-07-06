// การกำหนด enum สำหรับสถานะสินค้า
var ProductStatus;
(function (ProductStatus) {
    ProductStatus["Available"] = "Available";
    ProductStatus["OutofStock"] = "Out of Stock";
    ProductStatus["Discontinued"] = "Discontinued";
})(ProductStatus || (ProductStatus = {}));
// การกำหนด array ของสินค้าใช้ชนิดข้อมูล any
var products = [
    { name: "Laptop", status: ProductStatus.Available, price: 1200 },
    { name: "Smartphone", status: ProductStatus.OutofStock, price: 700 },
    { name: "Tablet", status: ProductStatus.Discontinued, price: 300 },
];
//ฟังกฺชั่นสำหรับแสดงข้อมูลสินค้า
function displayProductDetails(products) {
    products.forEach(function (product) {
        console.log("Product: ".concat(product.name, ", Status: ").concat(product.status, ", Price: ").concat(product.price));
    });
}
displayProductDetails(products);
