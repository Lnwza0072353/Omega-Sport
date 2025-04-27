document.addEventListener('DOMContentLoaded', () => {
    const cartCountElement = document.getElementById('cartCount');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    if (cartCountElement) {
        cartCountElement.textContent = totalQuantity;
    }
});