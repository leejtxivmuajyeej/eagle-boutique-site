<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>XENGORA | Order Products</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
    }

    body {
      background: #050505;
      color: #ffffff;
      min-height: 100vh;
    }

    .hero {
      padding: 45px 20px 25px;
      text-align: center;
      background: linear-gradient(180deg, #101010, #050505);
    }

    .logo {
      font-size: 34px;
      font-weight: bold;
      letter-spacing: 3px;
      color: #d8b45a;
    }

    .tagline {
      margin-top: 10px;
      font-size: 16px;
      color: #dddddd;
    }

    .container {
      max-width: 950px;
      margin: auto;
      padding: 25px 18px 60px;
    }

    .section-title {
      text-align: center;
      font-size: 28px;
      margin-bottom: 25px;
      color: #d8b45a;
    }

    .products {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 20px;
    }

    .product-card {
      background: #141414;
      border: 1px solid #2b2b2b;
      border-radius: 18px;
      padding: 22px;
      text-align: center;
      box-shadow: 0 10px 25px rgba(0,0,0,0.35);
    }

    .product-card h3 {
      font-size: 22px;
      margin-bottom: 8px;
      color: #ffffff;
    }

    .product-card p {
      color: #cccccc;
      margin-bottom: 12px;
    }

    .price {
      font-size: 24px;
      color: #d8b45a;
      font-weight: bold;
      margin-bottom: 15px;
    }

    .qty-row {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      margin-top: 12px;
    }

    .qty-row input {
      width: 75px;
      padding: 10px;
      border-radius: 10px;
      border: none;
      text-align: center;
      font-size: 17px;
    }

    .total-box {
      margin-top: 28px;
      background: #1b1b1b;
      border: 1px solid #d8b45a;
      border-radius: 18px;
      padding: 22px;
      text-align: center;
    }

    .total-box h2 {
      color: #d8b45a;
      font-size: 30px;
    }

    .payment-box {
      margin-top: 25px;
      background: #111111;
      border-radius: 18px;
      padding: 24px;
      border: 1px solid #2b2b2b;
    }

    .payment-box h2 {
      color: #d8b45a;
      text-align: center;
      margin-bottom: 18px;
    }

    .payment-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 15px;
    }

    .pay-card {
      background: #1a1a1a;
      padding: 18px;
      border-radius: 14px;
      text-align: center;
    }

    .pay-card h3 {
      color: #ffffff;
      margin-bottom: 8px;
    }

    .pay-card p {
      color: #cccccc;
      font-size: 15px;
      line-height: 1.5;
    }

    .pay-card a {
      color: #d8b45a;
      font-weight: bold;
      text-decoration: none;
    }

    .phone-big {
      font-size: 22px;
      color: #ffffff;
      font-weight: bold;
      margin-top: 6px;
    }

    .whatsapp-btn {
      display: block;
      margin: 28px auto 0;
      background: #25D366;
      color: #ffffff;
      border: none;
      border-radius: 999px;
      padding: 15px 26px;
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
      text-decoration: none;
      max-width: 330px;
      text-align: center;
    }

    .note {
      text-align: center;
      color: #bbbbbb;
      font-size: 14px;
      margin-top: 18px;
      line-height: 1.5;
    }

    footer {
      text-align: center;
      padding: 25px 15px;
      background: #000000;
      color: #888888;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <header class="hero">
    <div class="logo">XENGORA</div>
    <p class="tagline">Luxury wellness products made simple.</p>
  </header>

  <main class="container">
    <h1 class="section-title">Order Products</h1>

    <section class="products">
      <div class="product-card">
        <h3>Ginger Shampoo</h3>
        <p>Clean, fresh hair care.</p>
        <div class="price">$25</div>
        <div class="qty-row">
          <label for="shampooQty">Qty</label>
          <input type="number" id="shampooQty" value="0" min="0" oninput="calculateTotal()" />
        </div>
      </div>

      <div class="product-card">
        <h3>Wolffia Protein</h3>
        <p>Premium protein blend.</p>
        <div class="price">$35</div>
        <div class="qty-row">
          <label for="proteinQty">Qty</label>
          <input type="number" id="proteinQty" value="0" min="0" oninput="calculateTotal()" />
        </div>
      </div>

      <div class="product-card">
        <h3>Herbal Toothpaste</h3>
        <p>Natural daily oral care.</p>
        <div class="price">$35</div>
        <div class="qty-row">
          <label for="toothpasteQty">Qty</label>
          <input type="number" id="toothpasteQty" value="0" min="0" oninput="calculateTotal()" />
        </div>
      </div>
    </section>

    <section class="total-box">
      <h2>Total: $<span id="totalAmount">0</span></h2>
    </section>

    <section class="payment-box">
      <h2>Payment Options</h2>

      <div class="payment-grid">
        <div class="pay-card">
          <h3>PayPal</h3>
          <p><a href="https://www.paypal.me/xengthao1999" target="_blank">Pay with PayPal</a></p>
          <p>@xengthao1999</p>
        </div>

        <div class="pay-card">
          <h3>Zelle</h3>
          <p>Send payment to:</p>
          <div class="phone-big">478-697-2163</div>
        </div>

        <div class="pay-card">
          <h3>Venmo</h3>
          <p>@xengthao99</p>
          <p>Add your order name in the note.</p>
        </div>
      </div>

      <a id="whatsappOrder" class="whatsapp-btn" href="#" target="_blank">Order on WhatsApp</a>

      <p class="note">
        After payment, please send a screenshot and your shipping information through WhatsApp.
      </p>
    </section>
  </main>

  <footer>
    © 2026 XENGORA. All rights reserved.
  </footer>

  <script>
    const prices = {
      shampoo: 25,
      protein: 35,
      toothpaste: 35
    };

    function cleanQty(value) {
      const number = parseInt(value, 10);
      return isNaN(number) || number < 0 ? 0 : number;
    }

    function calculateTotal() {
      const shampooQty = cleanQty(document.getElementById('shampooQty').value);
      const proteinQty = cleanQty(document.getElementById('proteinQty').value);
      const toothpasteQty = cleanQty(document.getElementById('toothpasteQty').value);

      const total =
        shampooQty * prices.shampoo +
        proteinQty * prices.protein +
        toothpasteQty * prices.toothpaste;

      document.getElementById('totalAmount').textContent = total;

      const orderText = `Hello, I want to order:%0A%0A` +
        `Ginger Shampoo: ${shampooQty}%0A` +
        `Wolffia Protein: ${proteinQty}%0A` +
        `Herbal Toothpaste: ${toothpasteQty}%0A%0A` +
        `Total: $${total}%0A%0A` +
        `Name:%0AShipping Address:%0APayment Method:`;

      document.getElementById('whatsappOrder').href = `https://wa.me/14786972163?text=${orderText}`;
    }

    calculateTotal();
  </script>
</body>
</html>
