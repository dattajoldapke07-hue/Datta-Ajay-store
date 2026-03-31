// --- LOGIN ---
document.addEventListener("DOMContentLoaded", function(){

    // Fix: Proper listener on login button
    const loginButton = document.getElementById("loginBtn");
    loginButton.addEventListener("click", function(){
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        if(username === "admin" && password === "1234"){
            localStorage.setItem("loggedInUser","admin");
            document.getElementById("loginOverlay").style.display = "none";
            showStore(); // Only after click
        } else {
            document.getElementById("loginError").style.display = "block";
        }
    });

    // Auto-load store if already logged in
    if(localStorage.getItem("loggedInUser")){
        document.getElementById("loginOverlay").style.display = "none";
        showStore();
    }

});    const container=document.getElementById("products");
    container.innerHTML="";
    products.forEach(p=>{
        const div=document.createElement("div");
        div.classList.add("product");
        div.innerHTML=`<img src="${p.image}"> <h3>${p.name}</h3> <p>₹${p.price}</p>
                       <button onclick="addToCart(${p.id})">Add to Cart</button>
                       <button onclick="addToWishlist(${p.id})">❤️ Wishlist</button>`;
        container.appendChild(div);
    });
}

// --- CART ---
function addToCart(id){
    let item=products.find(p=>p.id===id);
    let exist=cart.find(c=>c.id===id);
    if(exist) exist.qty+=1; 
    else { item.qty=1; cart.push(item);}
    localStorage.setItem("cart",JSON.stringify(cart));
    updateCartCount();
    alert("Added to Cart ✅");
}
function updateCartCount(){ document.getElementById("cartCount").innerText=cart.length; }

// --- WISHLIST ---
function addToWishlist(id){
    let item=products.find(p=>p.id===id);
    if(!wishlist.find(w=>w.id===id)) wishlist.push(item);
    localStorage.setItem("wishlist",JSON.stringify(wishlist));
    alert("Added to Wishlist ❤️");
}

// --- DARK MODE ---
function toggleDark(){ document.body.classList.toggle("dark"); }    const container=document.getElementById("products");
    container.innerHTML="";
    products.forEach(p=>{
        const div=document.createElement("div");
        div.classList.add("product");
        div.innerHTML=`<img src="${p.image}"> <h3>${p.name}</h3> <p>₹${p.price}</p>
                       <button onclick="addToCart(${p.id})">Add to Cart</button>
                       <button onclick="addToWishlist(${p.id})">❤️ Wishlist</button>`;
        container.appendChild(div);
    });
}

// --- CART ---
function addToCart(id){
    let item=products.find(p=>p.id===id);
    let exist=cart.find(c=>c.id===id);
    if(exist) exist.qty+=1; 
    else { item.qty=1; cart.push(item);}
    localStorage.setItem("cart",JSON.stringify(cart));
    updateCartCount();
    alert("Added to Cart ✅");
}
function updateCartCount(){ document.getElementById("cartCount").innerText=cart.length; }

// --- WISHLIST ---
function addToWishlist(id){
    let item=products.find(p=>p.id===id);
    if(!wishlist.find(w=>w.id===id)) wishlist.push(item);
    localStorage.setItem("wishlist",JSON.stringify(wishlist));
    alert("Added to Wishlist ❤️");
}

// --- DARK MODE ---
function toggleDark(){ document.body.classList.toggle("dark"); }    const container=document.getElementById("products");
    container.innerHTML="";
    products.forEach(p=>{
        const div=document.createElement("div");
        div.classList.add("product");
        div.innerHTML=`<img src="${p.image}"> <h3>${p.name}</h3> <p>₹${p.price}</p>
                       <button onclick="addToCart(${p.id})">Add to Cart</button>
                       <button onclick="addToWishlist(${p.id})">❤️ Wishlist</button>`;
        container.appendChild(div);
    });
}

// --- CART ---
function addToCart(id){
    let item=products.find(p=>p.id===id);
    let exist=cart.find(c=>c.id===id);
    if(exist) exist.qty+=1; 
    else { item.qty=1; cart.push(item);}
    localStorage.setItem("cart",JSON.stringify(cart));
    updateCartCount();
    alert("Added to Cart ✅");
}
function updateCartCount(){ document.getElementById("cartCount").innerText=cart.length; }

// --- WISHLIST ---
function addToWishlist(id){
    let item=products.find(p=>p.id===id);
    if(!wishlist.find(w=>w.id===id)) wishlist.push(item);
    localStorage.setItem("wishlist",JSON.stringify(wishlist));
    alert("Added to Wishlist ❤️");
}

// --- DARK MODE ---
function toggleDark(){ document.body.classList.toggle("dark"); }
