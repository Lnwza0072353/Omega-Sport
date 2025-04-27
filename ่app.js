/* filepath: e:\Project12267\script.js */
let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    const cartCount = document.getElementById('cartCount');
    if (!cartCount) {
        console.error('Cart count element not found!');
        return;
    }
});

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    console.log(`Added to cart: ${productName}, Price: ${productPrice}`); // ตรวจสอบใน Console
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    cartCount.textContent = cart.length;
}

function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const products = document.querySelectorAll('.product-item');

    products.forEach(product => {
        const productName = product.getAttribute('data-name').toLowerCase();
        if (productName.includes(searchInput)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}