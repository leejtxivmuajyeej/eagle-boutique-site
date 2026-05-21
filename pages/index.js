<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>XENGORA Beauty & Health</title>
  <meta name="description" content="XENGORA Beauty & Health - Wolffia Protein, Herbal Toothpaste, and Ginger Shampoo." />

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Arial, Helvetica, sans-serif;
      background: #fffaf5;
      color: #2b2118;
      line-height: 1.6;
    }

    header {
      background: linear-gradient(135deg, #111111, #3a2416);
      color: white;
      padding: 18px 7%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 0;
      z-index: 1000;
      box-shadow: 0 4px 18px rgba(0,0,0,0.18);
    }

    .logo {
      font-size: 28px;
      font-weight: 800;
      letter-spacing: 2px;
      color: #f7d07a;
    }

    nav a {
      color: white;
      text-decoration: none;
      margin-left: 24px;
      font-weight: 600;
      font-size: 15px;
    }

    nav a:hover {
      color: #f7d07a;
    }

    .hero {
      min-height: 85vh;
      padding: 80px 7%;
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      align-items: center;
      gap: 50px;
      background: radial-gradient(circle at top right, #ffe1b4, #fffaf5 45%, #ffffff);
    }

    .hero h1 {
      font-size: clamp(42px, 6vw, 76px);
      line-height: 1.02;
      color: #1d1712;
      margin-bottom: 22px;
    }

    .hero h1 span {
      color: #b87922;
    }

    .hero p {
      font-size: 19px;
      color: #5b4a3c;
      max-width: 590px;
      margin-bottom: 32px;
    }

    .hero-buttons {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
    }

    .btn {
      display: inline-block;
      padding: 14px 26px;
      border-radius: 999px;
      text-decoration: none;
      font-weight: 800;
      transition: all 0.2s ease;
    }

    .btn-primary {
      background: #111111;
      color: white;
    }

    .btn-primary:hover {
      background: #b87922;
      transform: translateY(-2px);
    }

    .btn-secondary {
      border: 2px solid #b87922;
      color: #7a4a10;
      background: white;
    }

    .btn-secondary:hover {
      background: #fff1d6;
      transform: translateY(-2px);
    }

    .hero-card {
      background: white;
      border-radius: 32px;
      padding: 28px;
      box-shadow: 0 25px 60px rgba(74, 46, 20, 0.18);
      border: 1px solid rgba(184, 121, 34, 0.18);
      text-align: center;
    }

    .hero-card img {
      width: 100%;
      max-height: 430px;
      object-fit: contain;
      border-radius: 24px;
      background: #fff7ed;
    }

    .hero-card h3 {
      margin-top: 18px;
      color: #1d1712;
      font-size: 24px;
    }

    .hero-card p {
      margin: 8px auto 0;
      font-size: 15px;
    }

    section {
      padding: 78px 7%;
    }

    .section-title {
      text-align: center;
      max-width: 780px;
      margin: 0 auto 45px;
    }

    .section-title h2 {
      font-size: clamp(32px, 4vw, 48px);
      color: #1d1712;
      margin-bottom: 12px;
    }

    .section-title p {
      color: #6c5a4c;
      font-size: 17px;
    }

    .products {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 28px;
    }

    .product-card {
      background: white;
      border-radius: 28px;
      overflow: hidden;
      box-shadow: 0 18px 40px rgba(54, 34, 18, 0.10);
      border: 1px solid #f0dfcb;
      transition: all 0.25s ease;
    }

    .product-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 26px 55px rgba(54, 34, 18, 0.16);
    }

    .product-image {
      height: 310px;
      background: #fff6e9;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 22px;
    }

    .product-image img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .product-content {
      padding: 26px;
    }

    .tag {
      display: inline-block;
      padding: 6px 12px;
      border-radius: 999px;
      background: #fff1d6;
      color: #8a5717;
      font-size: 13px;
      font-weight: 800;
      margin-bottom: 12px;
    }

    .product-content h3 {
      font-size: 24px;
      color: #1d1712;
      margin-bottom: 10px;
    }

    .product-content p {
      color: #6c5a4c;
      margin-bottom: 18px;
      font-size: 15px;
    }

    .product-content ul {
      list-style: none;
      margin-bottom: 22px;
    }

    .product-content li {
      margin-bottom: 8px;
      color: #3e3026;
      font-size: 15px;
    }

    .product-content li::before {
      content: "✓";
      color: #b87922;
      font-weight: bold;
      margin-right: 8px;
    }

    .shop-btn {
      display: block;
      text-align: center;
      background: #111111;
      color: white;
      padding: 13px 18px;
      border-radius: 16px;
      text-decoration: none;
      font-weight: 800;
    }

    .shop-btn:hover {
      background: #b87922;
    }

    .about {
      background: #111111;
      color: white;
      border-radius: 40px;
      padding: 55px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 35px;
      align-items: center;
    }

    .about h2 {
      font-size: 42px;
      color: #f7d07a;
      margin-bottom: 16px;
    }

    .about p {
      color: #f7eadb;
      font-size: 17px;
    }

    .feature-list {
      display: grid;
      gap: 16px;
    }

    .feature {
      background: rgba(255,255,255,0.08);
      padding: 18px;
      border-radius: 18px;
      border: 1px solid rgba(255,255,255,0.12);
    }

    .feature strong {
      display: block;
      color: #f7d07a;
      margin-bottom: 4px;
    }

    .contact {
      text-align: center;
      background: linear-gradient(135deg, #fff1d6, #ffffff);
    }

    .contact h2 {
      font-size: 42px;
      margin-bottom: 12px;
    }

    .contact p {
      color: #6c5a4c;
      font-size: 18px;
      margin-bottom: 24px;
    }

    footer {
      background: #111111;
      color: #f7eadb;
      text-align: center;
      padding: 28px 7%;
      font-size: 14px;
    }

    @media (max-width: 900px) {
      header {
        flex-direction: column;
        gap: 12px;
      }

      nav a {
        margin: 0 8px;
        font-size: 14px;
      }

      .hero {
        grid-template-columns: 1fr;
        padding-top: 55px;
      }

      .products {
        grid-template-columns: 1fr;
      }

      .about {
        grid-template-columns: 1fr;
        padding: 32px;
      }
    }
  </style>
</head>

<body>
  <header>
    <div class="logo">XENGORA</div>
    <nav>
      <a href="#home">Home</a>
      <a href="#products">Products</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <section class="hero" id="home">
      <div>
        <h1>Beauty & Health for Your <span>Everyday Glow</span></h1>
        <p>
          Discover XENGORA’s current in-stock products: nourishing Wolffia Protein,
          herbal toothpaste, and ginger shampoo created for daily self-care, beauty,
          and wellness.
        </p>
        <div class="hero-buttons">
          <a class="btn btn-primary" href="#products">Shop Products</a>
          <a class="btn btn-secondary" href="#contact">Contact Us</a>
        </div>
      </div>

      <div class="hero-card">
        <img src="https://i.postimg.cc/TY8j20SL/wolffia.jpg" alt="Wolffia Protein" />
        <h3>Featured Product</h3>
        <p>Wolffia Protein for beauty, wellness, and daily nutrition support.</p>
      </div>
    </section>

    <section id="products">
      <div class="section-title">
        <h2>Our In-Stock Products</h2>
        <p>Premium beauty and health essentials selected for everyday use.</p>
      </div>

      <div class="products">
        <div class="product-card">
          <div class="product-image">
            <img src="https://i.postimg.cc/TY8j20SL/wolffia.jpg" alt="Wolffia Protein" />
          </div>
          <div class="product-content">
            <span class="tag">Health & Nutrition</span>
            <h3>Wolffia Protein</h3>
            <p>Plant-based protein support for a healthy lifestyle and daily wellness routine.</p>
            <ul>
              <li>Plant-based protein</li>
              <li>Good for daily nutrition</li>
              <li>Easy to add to your routine</li>
            </ul>
            <a class="shop-btn" href="#contact">Order Now</a>
          </div>
        </div>

        <div class="product-card">
          <div class="product-image">
            <img src="https://i.postimg.cc/25TL4F0z/Herbal-Toothpaste.jpg" alt="Herbal Toothpaste" />
          </div>
          <div class="product-content">
            <span class="tag">Oral Care</span>
            <h3>Herbal Toothpaste</h3>
            <p>Herbal toothpaste for fresh breath and a clean daily oral care routine.</p>
            <ul>
              <li>Fresh daily clean</li>
              <li>Herbal oral care</li>
              <li>Great for everyday use</li>
            </ul>
            <a class="shop-btn" href="#contact">Order Now</a>
          </div>
        </div>

        <div class="product-card">
          <div class="product-image">
            <img src="https://i.postimg.cc/GpMJcCwx/Shampoo.jpg" alt="Ginger Shampoo" />
          </div>
          <div class="product-content">
            <span class="tag">Hair Care</span>
            <h3>Ginger Shampoo</h3>
            <p>Ginger shampoo for a clean scalp, fresh hair, and a beautiful hair-care routine.</p>
            <ul>
              <li>Ginger hair care</li>
              <li>Clean scalp feeling</li>
              <li>Perfect for daily beauty care</li>
            </ul>
            <a class="shop-btn" href="#contact">Order Now</a>
          </div>
        </div>
      </div>
    </section>

    <section id="about">
      <div class="about">
        <div>
          <h2>About XENGORA</h2>
          <p>
            XENGORA Beauty & Health brings together beauty, wellness, and lifestyle products
            that help customers feel confident, fresh, and healthy every day.
          </p>
        </div>
        <div class="feature-list">
          <div class="feature">
            <strong>Beauty Care</strong>
            Hair, oral, and daily self-care products for a fresh lifestyle.
          </div>
          <div class="feature">
            <strong>Health Support</strong>
            Wellness products selected to support everyday nutrition and confidence.
          </div>
          <div class="feature">
            <strong>Ready to Order</strong>
            Current products are in stock and ready for customer orders.
          </div>
        </div>
      </div>
    </section>

    <section class="contact" id="contact">
      <h2>Contact & Order</h2>
      <p>Message us to order Wolffia Protein, Herbal Toothpaste, or Ginger Shampoo.</p>
      <a class="btn btn-primary" href="mailto:minkaujntses2001@gmail.com">Email Us</a>
    </section>
  </main>

  <footer>
    © 2026 XENGORA Beauty & Health. All rights reserved.
  </footer>
</body>
</html>
