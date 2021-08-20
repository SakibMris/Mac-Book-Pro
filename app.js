// memory cost getting function 
function getMemoryCost(size) {
    const extraMemoryCost = document.getElementById('extra-memory-cost')
    if (size == 8) {
        extraMemoryCost.innerText = 0;
    }
    else if (size == 16) {
        extraMemoryCost.innerText = 180;
    }
};
// total cost count function 
function getTotalPrice() {
    const bestPrice = 1299;
    const extraMemory = document.getElementById('extra-memory-cost').innerText;
    const extraStorage = document.getElementById('extra-storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;
    const totalPrice = parseInt(bestPrice) + parseInt(extraMemory) + parseInt(extraStorage) + parseInt(deliveryCost);
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('final-total-price').innerText = totalPrice;
}
// handle memory buttons 
document.getElementById('memory-cost-8gb').addEventListener('click', function () {
    getMemoryCost(8);
});
document.getElementById('memory-cost-16gb').addEventListener('click', function () {
    getMemoryCost(16);
    getTotalPrice();

});
// getting storage cost function 
function getStorageCost(storage) {
    if (storage == 256) {
        document.getElementById('extra-storage-cost').innerText = 0;
    }
    else if (storage == 512) {
        document.getElementById('extra-storage-cost').innerText = 100;
    }
    else if (storage == 1000) {
        document.getElementById('extra-storage-cost').innerText = 180;
    }
};
// handle storage buttons 
document.getElementById('storage-cost-256gb').addEventListener('click', function () {
    getStorageCost(256);
    getTotalPrice();
});
document.getElementById('storage-cost-512gb').addEventListener('click', function () {
    getStorageCost(512);
    getTotalPrice();
});
document.getElementById('storage-cost-1tb').addEventListener('click', function () {
    getStorageCost(1000);
    getTotalPrice();
});
// getting delivery cost function 
function getDeliveryCost(cost) {
    if (cost == 0) {
        document.getElementById('delivery-cost').innerText = 0;
    }
    else if (cost == 20) {
        document.getElementById('delivery-cost').innerText = 20;
    }
};
// handle delivery option buttons 
document.getElementById('free-delivery').addEventListener('click', function () {
    getDeliveryCost(0);
    getTotalPrice();
});
document.getElementById('express-delivery').addEventListener('click', function () {
    getDeliveryCost(20);
    getTotalPrice();
});

function getFinalTotal() {
    const promoInput = document.getElementById('promo-input').value
    if (promoInput == 'stevekaku') {
        const totalInput = document.getElementById('final-total-price');
        const total = parseInt(totalInput.innerText);
        const percent = 20;
        totalInput.innerText = total - percent / 100 * total;

    }
    else {
        alert('Wrong Promo Code');
    }
}
document.getElementById('apply-button').addEventListener('click', function () {
    getFinalTotal();
});