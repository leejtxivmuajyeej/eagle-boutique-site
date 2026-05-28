<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Eagle International Import Export</title>

  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #4f5d43;
      color: #111;
    }

    header {
      text-align: center;
      padding: 35px 15px;
      color: white;
    }

    header h1 {
      margin: 0;
      font-size: 36px;
    }

    .products {
      display: flex;
      justify-content: center;
      gap: 35px;
      flex-wrap: wrap;
      padding: 40px 20px;
    }

    .product-card {
      background: rgba(255,255,255,0.18);
      width: 300px;
      padding: 30px;
      border-radius: 22px;
      text-align: center;
      box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    }

    .product-card img {
      width: 220px;
      height: 220px;
      object-fit: cover;
      border-radius: 4px;
    }

    .product-card h2 {
      font-size: 26px;
      color: #001b0c;
    }

    .product-card p {
      font-size: 15px;
      line-height: 1.5;
    }

    .price {
      font-size: 22px;
      font-weight: bold;
      color: #063d1f;
    }

    .order-btn {
      background: #087a36;
      color: white;
      border: none;
      padding: 12px 28px;
      border-radius: 30px;
      font-weight: bold;
      cursor: pointer;
      margin-top: 10px;
    }

    .order-btn:hover {
      background: #075f2c;
    }

    .modal {
      display: none;
      position: fixed;
      z-index: 9999;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow-y: auto;
      background: rgba(0,0,0,0.65);
    }

    .modal-content {
      background: white;
      margin: 35px auto;
      padding: 25px;
      width: 90%;
      max-width: 430px;
      border-radius: 18px;
      text-align: center;
      position: relative;
    }

    .close {
      position: absolute;
      right: 18px;
      top: 10px;
      font-size: 32px;
      cursor: pointer;
      font-weight: bold;
    }

    .modal-img {
      width: 150px;
      height: 150px;
      object-fit: cover;
      margin-top: 15px;
    }

    .modal-price {
      font-size: 22px;
      font-weight: bold;
      color: #0b6b38;
    }

    select {
      width: 100%;
      padding: 12px;
      border-radius: 12px;
      border: 2px solid #111;
      font-weight: bold;
      margin: 12px 0;
    }

    .total-box {
      margin: 15px 0;
      padding: 14px;
      background: #111;
      color: white;
      border-radius: 14px;
      font-size: 24px;
      font-weight: bold;
    }

    .pay-btn {
      display: block;
      background: #0070ba;
      color: white;
      padding: 13px;
      border-radius: 30px;
      text-decoration: none;
      font-weight: bold;
      margin: 12px 0;
    }

    .venmo-box {
      background: #118CFF;
      color: white;
      padding: 13px;
      border-radius: 30px;
      font-weight: bold;
      margin: 12px 0;
    }

    .note {
      font-size: 12px;
      color: #555;
    }

    .qr-img {
      width: 135px;
      margin: 10px 0;
    }

    .zelle-box {
      background: #f1f1f1;
      padding: 18px;
      border-radius: 14px;
      margin: 12px 0;
    }

    .zelle-logo {
      font-size: 24px;
      color: #6C1CD1;
      font-weight: bold;
    }

    .zelle-number {
      font-size: 34px;
      font-weight: bold;
      color: #6C1CD1;
      margin-top: 8px;
    }

    .whatsapp-btn {
      background: #25D366;
      color: white;
      border: none;
      padding: 15px;
      border-radius: 30px;
      font-size: 16px;
      font-weight: bold;
      width: 100%;
      cursor: pointer;
      margin-top: 12px;
    }

    .whatsapp-btn:hover {
      background: #1fac55;
    }

    @media (max-width: 700px) {
      header h1 {
        font-size: 28px;
      }

      .product-card {
        width: 85%;
      }

      .zelle-number {
        font-size: 28px;
      }
    }
  </style>
</head>

<body>

<header>
  <h1>Eagle International Import Export</h1>
  <p>Premium wellness and beauty products</p>
</header>

<section class="products">

  <div class="product-card">
    <img src="shampoo.png" alt="Ginger Shampoo">
    <h2>Ginger Shampoo</h2>
    <p class="price">$25</p>
    <p>Luxury botanical ginger shampoo for scalp care and healthy-looking hair.</p>
    <button class="order-btn" onclick="openOrder('Ginger Shampoo', 'shampoo.png')">
      Click to Order
    </button>
  </div>

  <div class="product-card">
    <img src="protein.png" alt="Wolffia Protein">
    <h2>Wolffia Protein</h2>
    <p class="price">$35</p>
    <p>Plant-based protein supplement for wellness and nutrition.</p>
    <button class="order-btn" onclick="openOrder('Wolffia Protein', 'protein.png')">
      Click to Order
    </button>
  </div>

  <div class="product-card">
    <img src="toothpaste.png" alt="Herbal Toothpaste">
    <h2>Herbal Toothpaste</h2>
    <p class="price">$35</p>
    <p>Premium herbal toothpaste for fresh breath and daily oral care.</p>
    <button class="order-btn" onclick="openOrder('Herbal Toothpaste', 'toothpaste.png')">
      Click to Order
    </button>
  </div>

</section>

<div id="orderModal" class="modal">
  <div class="modal-content">
    <span class="close" onclick="closeOrder()">&times;</span>

    <img id="modalProductImage" src="" alt="Product Image" class="modal-img">

    <h2 id="modalProductName">Product Name</h2>
    <p id="modalProductPrice" class="modal-price">$0 each</p>

    <label>Choose Quantity</label>
    <select id="modalQty" onchange="calculateModalTotal()">
      <option value="1">1 Item</option>
      <option value="2">2 Items</option>
      <option value="3">3 Items</option>
      <option value="4">4 Items</option>
      <option value="5">5 Items</option>
      <option value="6">6 Items</option>
      <option value="10">10 Items</option>
    </select>

    <div class="total-box">
      Total: $<span id="modalTotal">0</span>
    </div>

    <a href="https://paypal.me/xengthao1999" target="_blank" class="pay-btn">
      PayPal: @xengthao1999
    </a>

    <p class="note">PayPal note: Friends & Family appreciated when available.</p>

    <div class="venmo-box">
      Venmo: @xengthao99
    </div>

    <img src="venmo-qr.png" alt="Venmo QR Code" class="qr-img">

    <div class="zelle-box">
      <div class="zelle-logo">Zelle</div>
      <div class="zelle-number">478-697-2163</div>
    </div>

    <button onclick="sendModalOrder()" class="whatsapp-btn">
      Send Order on WhatsApp
    </button>
  </div>
</div>

<script>
  let selectedProductName = "";
  let selectedProductPrice = 0;

  const productPrices = {
    "Ginger Shampoo": 25,
    "Wolffia Protein": 35,
    "Herbal Toothpaste": 35
  };

  function openOrder(productName, productImage) {
    selectedProductName = productName;
    selectedProductPrice = productPrices[productName] || 0;

    document.getElementById("modalProductName").innerText = productName;
    document.getElementById("modalProductImage").src = productImage;
    document.getElementById("modalProductPrice").innerText = "$" + selectedProductPrice + " each";

    document.getElementById("modalQty").value = "1";
    calculateModalTotal();

    document.getElementById("orderModal").style.display = "block";
  }

  function closeOrder() {
    document.getElementById("orderModal").style.display = "none";
  }

  function calculateModalTotal() {
    let qty = Number(document.getElementById("modalQty").value);
    let total = qty * selectedProductPrice;
    document.getElementById("modalTotal").innerText = total;
  }

  function sendModalOrder() {
    let qty = Number(document.getElementById("modalQty").value);
    let total = qty * selectedProductPrice;

    let message =
      `Hi, I want to order:\n` +
      `Product: ${selectedProductName}\n` +
      `Quantity: ${qty}\n` +
      `Price each: $${selectedProductPrice}\n` +
      `Total: $${total}`;

    let phone = "14786972163";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  }

  window.onclick = function(event) {
    let modal = document.getElementById("orderModal");
    if (event.target === modal) {
      closeOrder();
    }
  };
</script>

</body>
</html>
