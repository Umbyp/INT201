// สร้างระบบการจัดการรายการสั่งซื้อสินค้าออนไลน์
function createOnlineShoppingSystem() {
    let products = [];
    let cart = [];
    let orders = [];
  
    // Closure เพื่อเพิ่มสินค้าใหม่
    function addProduct(name, price, quantity) {
      const product = {
        name,
        price,
        quantity,
      };
      products.push(product);
    }
  
    // Closure เพื่อเพิ่มสินค้าลงในตะกร้า
    function addToCart(productName, quantity) {
      const product = products.find(product => product.name === productName);
      if (product) {
        const existingItem = cart.find(item => item.product.name === productName);
        if (existingItem) {
          existingItem.quantity += quantity;
        } else {
          cart.push({ product, quantity });
        }
      }
    }
  
    // Closure เพื่อแก้ไขปริมาณสินค้าในตะกร้า
    function updateCartItemQuantity(productName, newQuantity) {
      const item = cart.find(item => item.product.name === productName);
      if (item) {
        item.quantity = newQuantity;
      }
    }
  
    // Closure เพื่อคำนวณยอดรวมของตะกร้า
    function calculateCartTotal() {
      return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
  
    // Closure เพื่อแสดงรายการสินค้าในตะกร้า
    function showCart() {
      console.log("รายการสินค้าในตะกร้า:");
      cart.forEach(item => {
        console.log(`${item.product.name} - ราคา: ${item.product.price} บาท, ปริมาณ: ${item.quantity}`);
      });
    }
  
    // Closure เพื่อสร้างคำสั่งซื้อ
    function createOrder() {
      const order = {
        items: [...cart],
        total: calculateCartTotal(),
      };
      orders.push(order);
      cart = [];
    }
  
    // Closure เพื่อแสดงรายการที่สั่งซื้อทั้งหมด
    function showOrders() {
      console.log("รายการที่สั่งซื้อทั้งหมด:");
      orders.forEach((order, index) => {
        console.log(`คำสั่งซื้อที่ ${index + 1}`);
        order.items.forEach(item => {
          console.log(`${item.product.name} - ราคา: ${item.product.price} บาท, ปริมาณ: ${item.quantity}`);
        });
        console.log(`ยอดรวม: ${order.total} บาท`);
      });
    }
  
    // Closure เพื่อค้นหาข้อมูลของสินค้า
    function findProductByName(productName) {
      return products.find(product => product.name === productName);
    }
  
    return {
      addProduct,
      addToCart,
      updateCartItemQuantity,
      calculateCartTotal,
      showCart,
      createOrder,
      showOrders,
      findProductByName,
    };
  }
  
  const onlineShoppingSystem = createOnlineShoppingSystem();
  
  onlineShoppingSystem.addProduct("เสื้อยืด", 150, 10);
  onlineShoppingSystem.addProduct("กางเกงยีนส์", 250, 5);
  
  onlineShoppingSystem.addToCart("เสื้อยืด", 3);
  onlineShoppingSystem.addToCart("กางเกงยีนส์", 2);
  
  onlineShoppingSystem.showCart();
  // รายการสินค้าในตะกร้า:
  // เสื้อยืด - ราคา: 150 บาท, ปริมาณ: 3
  // กางเกงยีนส์ - ราคา: 250 บาท, ปริมาณ: 2
  
  onlineShoppingSystem.updateCartItemQuantity("เสื้อยืด", 5);
  
  console.log(onlineShoppingSystem.calculateCartTotal()); // 1250
  
  onlineShoppingSystem.createOrder();
  
  onlineShoppingSystem.showOrders();
  // รายการที่สั่งซื้อทั้งหมด:
  // คำสั่งซื้อที่ 1
  // เสื้อยืด - ราคา: 150 บาท, ปริมาณ: 5
  // กางเกงยีนส์ - ราคา: 250 บาท, ปริมาณ: 2
  // ย
  