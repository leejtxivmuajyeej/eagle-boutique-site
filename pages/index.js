<section id="products" class="products-section">
  <div class="section-container">

    <h2 class="section-title">Premium Wellness Collection</h2>

    <div class="products-grid">

      <!-- Ginger Shampoo -->
      <div class="product-card">
        <img 
          src="https://i.postimg.cc/GpMJcCwx/Shampoo.jpg" 
          alt="Ginger Shampoo"
          class="product-img"
        >

        <h3>Ginger Shampoo</h3>

        <p>
          Luxury botanical ginger shampoo designed for scalp care,
          healthy-looking hair, and premium wellness beauty routines.
        </p>

        <a href="#contact" class="product-btn">
          Shop Now
        </a>
      </div>

      <!-- Herbal Toothpaste -->
      <div class="product-card">
        <img 
          src="https://i.postimg.cc/25TL4F0z/Herbal-Toothpaste.jpg" 
          alt="Herbal Toothpaste"
          class="product-img"
        >

        <h3>Herbal Toothpaste</h3>

        <p>
          Premium herbal toothpaste inspired by natural wellness
          and daily oral care traditions.
        </p>

        <a href="#contact" class="product-btn">
          Shop Now
        </a>
      </div>

      <!-- Wolffia Protein -->
      <div class="product-card">
        <img 
          src="https://i.postimg.cc/TY8j20SL/wolffia.jpg" 
          alt="Wolffia Protein"
          class="product-img"
        >

        <h3>Wolffia Protein</h3>

        <p>
          Plant-based superfood protein supplement crafted for
          wellness, nutrition, and healthy lifestyles.
        </p>

        <a href="#contact" class="product-btn">
          Shop Now
        </a>
      </div>

    </div>
  </div>
</section>

<style>
.products-section {
  padding: 90px 7%;
  background: #f6f2eb;
}

.section-title {
  font-size: 52px;
  font-weight: 800;
  margin-bottom: 50px;
  color: #111;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 35px;
}

.product-card {
  background: white;
  border-radius: 28px;
  padding: 30px;
  box-shadow: 0 12px 40px rgba(0,0,0,0.08);
  transition: 0.3s ease;
}

.product-card:hover {
  transform: translateY(-8px);
}

.product-img {
  width: 100%;
  height: 300px;
  object-fit: contain;
  display: block;
  margin-bottom: 25px;
}

.product-card h3 {
  font-size: 32px;
  margin-bottom: 18px;
  color: #111;
}

.product-card p {
  font-size: 17px;
  line-height: 1.8;
  color: #555;
  margin-bottom: 25px;
}

.product-btn {
  display: inline-block;
  padding: 14px 28px;
  background: black;
  color: white;
  text-decoration: none;
  border-radius: 14px;
  font-weight: 700;
  transition: 0.3s ease;
}

.product-btn:hover {
  background: #b98a3d;
}
</style>
