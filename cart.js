// โหลดตะกร้าสินค้าจาก Local Storage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// ฟังก์ชันอัปเดตจำนวนสินค้าในไอคอนตะกร้า
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalQuantity;
}

// ฟังก์ชันเพิ่มสินค้าเข้าตะกร้า
function addToCart(name, price, quantity, option, image) {
    // รวมชื่อสินค้าและตัวเลือกเพื่อแยกสินค้า
    const fullName = `${name} (${option})`;
    const existingItem = cart.find(item => item.name === fullName);
    if (existingItem) {
        existingItem.quantity += quantity; // เพิ่มจำนวนสินค้า
    } else {
        cart.push({ name: fullName, price, quantity, image }); // เพิ่มสินค้าใหม่พร้อมฟิลด์ image
    }
    localStorage.setItem('cart', JSON.stringify(cart)); // บันทึกข้อมูลลง Local Storage
    updateCartCount(); // อัปเดตจำนวนสินค้าในตะกร้า
}

// ฟังก์ชันเลือกสินค้า (Basic Set หรือ Pro Set)
function selectOption(button) {
    document.querySelectorAll('.option-button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

// เรียกฟังก์ชันอัปเดตจำนวนสินค้าเมื่อโหลดหน้า
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();

    // จัดการการเลือกสินค้า
    document.querySelectorAll('.option-button').forEach(button => {
        button.addEventListener('click', () => selectOption(button));
    });

    // จัดการการกดปุ่ม "ใส่รถเข็น"
    const addToCartButton = document.querySelector('.add-to-cart');
    if (addToCartButton) {
        addToCartButton.addEventListener('click', () => {
            const activeButton = document.querySelector('.option-button.active');
            if (!activeButton) {
                return;
            }

            const name = document.querySelector('.product-name').textContent.trim(); // ชื่อสินค้า
            const price = parseInt(activeButton.dataset.price); // ราคาสินค้า
            const quantity = parseInt(document.getElementById('quantity').value) || 1; // จำนวนสินค้าที่เลือก

            addToCart(name, price, quantity);
        }, { once: true }); // ใช้ { once: true } เพื่อให้ Event Listener ทำงานเพียงครั้งเดียว
    }
});