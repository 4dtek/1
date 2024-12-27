// استرجاع تفاصيل المنتج عند فتح صفحة الطلب
document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const product = params.get('product');

    if (product === 'kaftan1') {
        document.getElementById('product-image').src = 'images/kaftan1.jpg';
        document.getElementById('product-title').textContent = 'قفطان مرام';
        document.getElementById('product-price').textContent = '5500 دج';
    } else if (product === 'kaftan2') {
        document.getElementById('product-image').src = 'images/kaftan2.jpg';
        document.getElementById('product-title').textContent = 'قفطان أيلين';
        document.getElementById('product-price').textContent = '4500