<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Eagle International Import & Export</title>

  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
      background: #f4f0ea;
      color: #000;
    }

    section {
      padding: 70px 40px;
    }

    .products-section {
      max-width: 1400px;
      margin: auto;
    }

    .section-title {
      font-size: 46px;
      font-weight: 900;
      margin-bottom: 50px;
      letter-spacing: 1px;
    }

    .product-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
    }

    .product-card {
      background: #fff;
      border-radius: 18px;
      padding: 22px 24px 32px;
      min-height: 398px;
      box-shadow: 0 12px 30px rgba(0,0,0,0.06);
    }

    .product-card img {
      width: 100%;
      height: 240px;
      object-fit: contain;
      display: block;
      margin: 0 auto 28px;
    }

    .product-card h3 {
      font-size: 20px;
      margin: 0 0 14px;
      font-weight: 800;
    }

    .product-card p {
      font-size: 14px;
      line-height: 1.35;
      margin: 0 0 18px;
    }

    .price {
      font-size: 22px;
      font-weight: 900;
      color: #b8860b;
      margin-bottom: 12px;
    }

    .qty-row {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-top: 10px;
    }

    .qty-row label {
      font-weight: bold;
      font-size: 14px;
    }

    .qty-row input {
      width: 80px;
      padding: 9px;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-size: 16px;
      text-align: center;
    }

    .checkout-section {
      max-width: 900px;
      margin: 0 auto 70px;
      background: #fff;
      border-radius: 22px;
      padding: 35px;
      box-shadow: 0 12px 30px rgba(0,0,0,0.06);
      text-align: center;
    }

    .checkout-section h2 {
      font-size: 34px;
      margin: 0 0 20px;
    }

    .total {
      font-size: 30px;
      font-weight: 900;
      color: #b8860b;
      margin-bottom: 25px;
    }

    .payment-box {
      background: #f4f0ea;
      border-radius: 16px;
      padding: 24px;
    }

    .payment-box h3 {
      margin-top: 0;
      font-size: 24px;
    }

    .payment-button {
      display: block;
      max-width: 360px;
      margin: 12px auto;
      padding: 14px 20px;
      border-radius: 40px;
      text-decoration: none;
      font-weight: bold;
      color: #fff;
    }

    .paypal {
      background: #0070ba;
    }

    .whatsapp {
      background: #25d366;
    }

    .venmo {
      background: #3d95ce;
    }

    .zelle-info {
      font-size: 18px;
      font-weight: bold;
      margin: 20px 0;
    }

    footer {
      text-align: center;
      padding: 30px;
      background: #111;
      color: white;
      font-size: 14px;
    }

    @media (max-width: 900px) {
      section {
        padding: 45px 20px;
      }

      .section-title {
        font-size: 34px;
      }

      .product-grid {
        grid-template-columns: 1fr;
      }

      .product-card {
        min-height: auto;
      }
    }
  </style>
</head>

<body>

  <section class="products-section" id="products">
    <h1 class="section-title">Premium Wellness Collection</h1>

    <div class="product-grid">

      <div class="product-card">
        <img src="images/ginger-shampoo.jpg" alt="Ginger Shampoo">
        <h3>Ginger Shampoo</h3>
        <p>Luxury botanical ginger shampoo designed for scalp care, healthy-looking hair, and wellness beauty routines.</p>
        <div class="price">$25</div>
        <div class="qty-row">
          <label>Quantity:</label>
          <input type="number" id="shampooQty" min="0" value="0" oninput="calculateTotal()">
        </div>
      </div>

      <div class="product-card">
        <img src="images/herbal-toothpaste.jpg" alt="Herbal Toothpaste">
        <h3>Herbal Toothpaste</h3>
        <p>Premium herbal toothpaste inspired by natural wellness and daily oral care traditions.</p>
        <div class="price">$35</div>
        <div class="qty-row">
          <label>Quantity:</label>
          <input type="number" id="toothpasteQty" min="0" value="0" oninput="calculateTotal()">
        </div>
      </div>

      <div class="product-card">
        <img src="images/wolffia-protein.jpg" alt="Wolffia Protein">
        <h3>Wolffia Protein</h3>
        <p>Plant-based superfood protein supplement crafted for wellness, nutrition, and healthy lifestyles.</p>
        <div class="price">$35</div>
        <div class="qty-row">
          <label>Quantity:</label>
          <input type="number" id="proteinQty" min="0" value="0" oninput="calculateTotal()">
        </div>
      </div>

    </div>
  </section>

  <div class="checkout-section" id="order">
    <h2>Order Summary</h2>
    <div class="total">Total: $<span id="totalAmount">0</span></div>

    <div class="payment-box">
      <h3>Payment Options</h3>

      <a class="payment-button paypal" href="https://www.paypal.me/xengthao1999" target="_blank">
        Pay with PayPal
      </a>

      <a class="payment-button venmo" href="#">
        Venmo: @xengthao99
      </a>

      <div class="zelle-info">
        Zelle: 478-697-2163
      </div>

      <a class="payment-button whatsapp" id="whatsappBtn" target="_blank">
        Order on WhatsApp
      </a>
    </div>
  </div>

  <footer>
    © 2026 Eagle International Import & Export LLC. All rights reserved.
  </footer>

  <script>
    function calculateTotal() {
      const shampoo = Number(document.getElementById("shampooQty").value) || 0;
      const toothpaste = Number(document.getElementById("toothpasteQty").value) || 0;
      const protein = Number(document.getElementById("proteinQty").value) || 0;

      const total = shampoo * 25 + toothpaste * 35 + protein * 35;

      document.getElementById("totalAmount").textContent = total;

      const message =
        `Hello, I want to order:%0A` +
        `Ginger Shampoo: ${shampoo}%0A` +
        `Herbal Toothpaste: ${toothpaste}%0A` +
        `Wolffia Protein: ${protein}%0A` +
        `Total: $${total}`;

      document.getElementById("whatsappBtn").href =
        `https://wa.me/14786972163?text=${message}`;
    }

    calculateTotal();
  </script>

</body>
</html>
