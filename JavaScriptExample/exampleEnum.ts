enum OrderStatus {
  Pending = "Pending",
  Shipped = "Shipped",
  Cancelled = "Cancelled",
}
//สร้างฟังก์ชั่น
function displayOrderStatus(status: OrderStatus) {
  //ระบุชนิดของ Parameters
  switch (status) {
    case OrderStatus.Pending:
      console.log("Your order is pending.");
      break;
    case OrderStatus.Shipped:
      console.log("Your order has been shipped.");
      break;
    case OrderStatus.Cancelled:
      console.log("Your order has been cancelled.");
      break;
    default:
      console.log("Unknow Order Status.");
  }
} //End of Function

//Testing the Function
displayOrderStatus(OrderStatus.Pending);
displayOrderStatus(OrderStatus.Shipped);
displayOrderStatus(OrderStatus.Cancelled);