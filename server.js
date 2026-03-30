const express = require("express");
const app = express();

app.use(express.json());

let orders = [];

// ORDER SAVE
app.post("/order", (req, res) => {
  const order = req.body;
  order.id = Date.now();

  orders.push(order);

  res.json({
    message: "Order Confirmed ✅",
    orderId: order.id
  });
});

// BILL GENERATE
app.get("/bill/:id", (req, res) => {
  const id = Number(req.params.id);
  const order = orders.find(o => o.id === id);

  if (!order) return res.send("Order not found");

  let bill = `
    <h1>🧾 Invoice</h1>
    <p>Order ID: ${order.id}</p>
    <p>Total: ₹${order.total}</p>
    <h3>Items:</h3>
    <ul>
      ${order.items.map(i => `<li>${i.name} - ₹${i.price}</li>`).join("")}
    </ul>
  `;

  res.send(bill);
});

app.listen(3000, () => console.log("Server running 🚀"));
