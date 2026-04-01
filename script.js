// ===== PRODUCTS =====
const products = [
  {id:1,name:"T-Shirt",price:500,image:"https://www.freeiconspng.com/uploads/blank-t-shirt-png-16.jpg"},
  {id:2,name:"Shoes",price:1500,image:"https://www.pngall.com/wp-content/uploads/5/Men-Shoes-PNG-Image-File.png"},
  {id:3,name:"Watch",price:2000,image:"https://i.postimg.cc/66k6BKX7/1805QM04-1.jpg"},
  {id:4,name:"Backpack",price:800,image:"https://images.unsplash.com/photo-1509762774605-f07235a08f1f"},
  {id:5,name:"Premium Cotton Shirt",price:699,image:"https://i.postimg.cc/mD7ZKp5t/IMG-20260228-WA0050.jpg"},
  {id:6,name:"Round Sunglass",price:450,image:"https://i.postimg.cc/9FKSqXMf/IMG-20260228-WA0071.jpg"},
  {id:7,name:"White Shirt",price:299,image:"https://i.postimg.cc/L5bHPdY2/IMG-20260328-WA0044.jpg"},
  {id:8,name:"Silk Saree",price:1499,image:"https://i.postimg.cc/jqGQHDzF/IMG-20260325-WA0001.jpg"}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ===== SHOW PRODUCTS =====
function showStore() {
  const container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach(p => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });

  updateCartCount();
}

// ===== ADD TO CART =====
function addToCart(id){
  let item = products.find(p => p.id === id);
  let exist = cart.find(c => c.id === id);

  if(exist){
    exist.qty += 1;
  } else {
    cart.push({...item, qty:1});
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Added to Cart ✅");
}

// ===== CART COUNT =====
function updateCartCount(){
  let count = cart.reduce((sum,i)=>sum+i.qty,0);
  document.getElementById("cartCount").innerText = count;
}

// ===== SHOW CART =====
function showCart(){
  const container = document.getElementById("cartItems");
  container.innerHTML = "";

  if(cart.length===0){
    container.innerHTML = "<h2>Cart is empty!</h2>";
    return;
  }

  cart.forEach(item=>{
    container.innerHTML += `
      <div style="display:flex; gap:10px; align-items:center; background:white; padding:10px; border-radius:10px; margin:10px;">
        <img src="${item.image}" style="width:60px; height:60px; object-fit:cover; border-radius:8px;">
        <div>
          <h4>${item.name}</h4>
          <p>₹${item.price} x ${item.qty}</p>
        </div>
      </div>
    `;
  });

  let total = cart.reduce((sum,i)=>sum+i.price*i.qty,0);
  document.getElementById("totalPrice").innerText = "Total: ₹"+total;
}

// ===== PAYMENT =====
function validateAndPay(method){
  let name = document.getElementById("custName").value.trim();
  let phone = document.getElementById("custPhone").value.trim();
  let upi = document.getElementById("upiInput").value.trim();

  if(name.length < 3){
    alert("Enter valid name");
    return;
  }

  if(phone.length < 10){
    alert("Enter valid phone");
    return;
  }

  if(method === "UPI"){
    if(!upi.includes("@")){
      alert("Invalid UPI ID ❌");
      return;
    }
  }

  localStorage.setItem("customer", JSON.stringify({name, phone}));
  localStorage.setItem("paymentMethod", method);

  window.location.href = "success.html";
}

// ===== BILL =====
function generateBill(){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cust = JSON.parse(localStorage.getItem("customer"));
  let method = localStorage.getItem("paymentMethod");

  let total = cart.reduce((sum,i)=>sum+i.price*i.qty,0);

  let content = `
    <h2>Datta & Ajay Store</h2>
    <p><b>Name:</b> ${cust.name}</p>
    <p><b>Phone:</b> ${cust.phone}</p>
    <p><b>Payment:</b> ${method}</p>
    <hr>
  `;

  cart.forEach(i=>{
    content += `<p>${i.name} x ${i.qty} = ₹${i.price*i.qty}</p>`;
  });

  content += `<hr><h3>Total: ₹${total}</h3>`;

  document.getElementById("billContent").innerHTML = content;
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", ()=>{
  if(document.getElementById("products")) showStore();
  if(document.getElementById("cartItems")) showCart();
});
