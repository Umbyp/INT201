// สร้างระบบการจัดการธุรกรรมการซื้อขาย (E-commerce)
function createEcommerceSystem() {
    let products = [];
    let orders = [];
    
    // Closure เพื่อเก็บข้อมูลรายการสินค้าในร้านค้า
    function addProduct(name, price) {
      const product = {
        name,
        price,
      };
      products.push(product);
    }
  
    // Closure เพื่อเก็บข้อมูลรายการการสั่งซื้อของลูกค้า
    function createOrder(customerName) {
      let orderItems = [];
      
      // Closure ภายใน createOrder เพื่อเก็บรายการสินค้าในคำสั่งซื้อ
      function addItemToOrder(productName, quantity) {
        const product = products.find(product => product.name === productName);
        if (product) {
          orderItems.push({ product, quantity });
        } else {
          console.log("สินค้าไม่มีอยู่ในร้านค้า");
        }
      }
  
      // Closure ภายใน createOrder เพื่อคำนวณราคารวมของคำสั่งซื้อ
      function calculateTotal() {
        return orderItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
      }
      
      // Closure ภายใน createOrder เพื่อเก็บคำสั่งซื้อในประวัติ
      function placeOrder() {
        const total = calculateTotal();
        orders.push({ customerName, orderItems, total });
      }
  
      return {
        addItemToOrder,
        calculateTotal,
        placeOrder,
      };
    }
  
    return {
      addProduct,
      createOrder,
    };
  }
  
  const ecommerceSystem = createEcommerceSystem();
  
  ecommerceSystem.addProduct("เสื้อยืด", 150);
  ecommerceSystem.addProduct("กางเกงยีนส์", 250);
  
  const order1 = ecommerceSystem.createOrder("John Doe");
  order1.addItemToOrder("เสื้อยืด", 2);
  order1.addItemToOrder("กางเกงยีนส์", 1);
  order1.placeOrder();
  
  console.log(order1.calculateTotal()); // 550
  
  const order2 = ecommerceSystem.createOrder("Alice Smith");
  order2.addItemToOrder("เสื้อยืด", 3);
  order2.placeOrder();
  
  console.log(order2.calculateTotal()); // 450
  