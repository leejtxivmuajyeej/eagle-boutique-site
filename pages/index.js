<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>XENGORA | Natural Products</title>

  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #f8f5ef;
      color: #222;
    }

    header {
      background: white;
      padding: 18px 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 10px rgba(0,0,0,0.08);
    }

    .logo {
      font-size: 28px;
      font-weight: bold;
      color: #8a5a2b;
      letter-spacing: 2px;
    }

    nav a {
      margin-left: 20px;
      text-decoration: none;
      color: #333;
      font-weight: bold;
    }

    .hero {
      text-align: center;
      padding: 70px 20px;
      background: linear-gradient(#fffaf2, #f1e6d6);
    }

    .hero h1 {
      font-size: 42px;
      color: #6b3f1d;
    }

    .hero p {
      font-size: 20px;
      max-width: 700px;
      margin: auto;
    }

    .products {
      padding: 50px 20px;
      max-width: 1100px;
      margin: auto;
    }

    .products h2 {
      text-align: center;
      font-size: 34px;
      color: #6b3f1d;
    }

    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 25px;
      margin-top: 30px;
    }

    .product-card {
      background: white;
      border-radius: 18px;
      padding: 22px;
      text-align: center;
      box-shadow: 0 5px 18px rgba(0,0,0,0.08);
    }

    .product-card img {
      width: 100%;
      height: 230px;
      object-fit: contain;
      background: #fafafa;
      border-radius: 14px;
    }

    .price {
      font-size: 22px;
      font-weight: bold;
      color: #8a5a2b;
    }

    input {
      width: 70px;
      padding: 8px;
      font-size: 16px;
      text-align: center;
    }

    .checkout {
      background: white;
      margin: 40px auto;
      max-width: 700px;
      padding: 30px;
      border-radius: 20px;
      box-shadow: 0 5px 18px rgba(0,0,0,0.08);
      text-align: center;
    }

    .total {
      font-size: 28px;
      color: #6b3f1d;
      font-weight: bold;
    }

    .pay-box {
      background: #f8f5ef;
      padding: 18px;
      border-radius: 14px;
      margin-top: 15px;
    }

    .btn {
      display: block;
      margin: 12px auto;
      padding: 14px;
      border-radius: 30px;
      text-decoration: none;
      font-weight: bold;
      max-width: 300px;
    }

    .paypal { background: #0070ba; color: white; }
    .whatsapp { background: #25D366; color: white; }
    .venmo { background: #3d95ce; color: white; }

    footer {
      text-align: center;
      padding: 25px;
      background: #6b3f1d;
      color: white;
      margin-top: 40px;
    }
  </style>
</head>

<body>

<header>
  <div class="logo">XENGORA</div>
  <nav>
    <a href="#products">Products</a>
    <a href="#order">Order</a>
    <a href="#contact">Contact</a>
  </nav>
</header>

<section class="hero">
  <h1>Natural Wellness Products</h1>
  <p>Premium products made for beauty, health, and everyday confidence.</p>
</section>

<section class="products" id="products">
  <h2>Shop Products</h2>

  <div class="product-grid">

    <div class="product-card">
      <img src="images/shampoo.jpg" alt="Ginger Shampoo">
      <h3>Ginger Shampoo</h3>
      <p class="price">$25</p>
      <input type="number" id="shampooQty" value="0" min="0" oninput="calculateTotal()">
    </div>

    <div class="product-card">
      <img src="images/protein.jpg" alt="Wolffia Protein">
      <h3>Wolffia Protein</h3>
      <p class="price">$35</p>
      <input type="number" id="proteinQty" value="0" min="0" oninput="calculateTotal()">
    </div>

    <div class="product-card">
      <img src="images/toothpaste.jpg" alt="Herbal Toothpaste">
      <h3>Herbal Toothpaste</h3>
      <p class="price">$35</p>
      <input type="number" id="toothpasteQty" value="0" min="0" oninput="calculateTotal()">
    </div>

  </div>
</section>

<section class="checkout" id="order">
  <h2>Order Summary</h2>
  <p class="total">Total: $<span id="totalAmount">0</span></p>

  <div class="pay-box">
    <h3>Payment Options</h3>

    <a class="btn paypal" href="https://www.paypal.me/xengthao1999" target="_blank">
      Pay with PayPal
    </a>

    <a class="btn venmo" href="#">
      Venmo: @xengthao99
    </a>

    <p><strong>Zelle:</strong><br>478-697-2163</p>

    <a class="btn whatsapp" id="whatsappBtn" target="_blank">
      Order on WhatsApp
    </a>
  </div>
</section>

<footer id="contact">
  <p>© 2026 XENGORA | Eagle International Import & Export LLC</p>
</footer>

<script>
  function calculateTotal() {
    const shampoo = Number(document.getElementById("shampooQty").value) || 0;
    const protein = Number(document.getElementById("proteinQty").value) || 0;
    const toothpaste = Number(document.getElementById("toothpasteQty").value) || 0;

    const total = (shampoo * 25) + (protein * 35) + (toothpaste * 35);

    document.getElementById("totalAmount").textContent = total;

    const message =
      `Hello, I want to order:%0A` +
      `Ginger Shampoo: ${shampoo}%0A` +
      `Wolffia Protein: ${protein}%0A` +
      `Herbal Toothpaste: ${toothpaste}%0A` +
      `Total: $${total}`;

    document.getElementById("whatsappBtn").href =
      `https://wa.me/14786972163?text=${message}`;
  }

  calculateTotal();
</script>

</body>
</html>
