const products = [
  {
    name: "Smart Watch",
    price: "₹1999",
    image: "smart.jpg"
  },
  {
    name: "Wireless Headphones",
    price: "₹2999",
    image: "ear.jpg"
  },
  {
    name: "Sneakers",
    price: "₹3499",
    image: "doo.jpeg"
  },
  {
    name: "Backpack",
    price: "₹1499",
    image: "backpack.jpg"
  }
];

const container = document.getElementById("productContainer");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartPanel = document.getElementById("cartPanel");

let cart = [];

// Load Products
products.forEach(product => {
  const div = document.createElement("div");
  div.classList.add("product");
  div.innerHTML = `
    <img src="${product.image}" />
    <h4>${product.name}</h4>
    <p>${product.price}</p>
    <button onclick="addToCart('${product.name}', '${product.price}')">
      Add to Cart
    </button>
  `;
  container.appendChild(div);
});

// Add to Cart
function addToCart(name, price) {
  cart.push({name, price});
  updateCart();
}

// Update Cart
function updateCart() {
  cartItems.innerHTML = "";
  cart.forEach(item => {
    cartItems.innerHTML += `
      <p>${item.name} - ${item.price}</p>
    `;
  });
  cartCount.innerText = cart.length;
}

// Toggle Cart
function toggleCart() {
  cartPanel.classList.toggle("active");
}
