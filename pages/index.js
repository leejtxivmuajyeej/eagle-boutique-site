import { useState } from "react";

export default function Home() {
  const [shampoo, setShampoo] = useState(0);
  const [toothpaste, setToothpaste] = useState(0);
  const [protein, setProtein] = useState(0);

  const total = shampoo * 25 + toothpaste * 35 + protein * 35;

  const whatsappMessage = encodeURIComponent(
    `Hello, I want to order:

Ginger Shampoo: ${shampoo}
Herbal Toothpaste: ${toothpaste}
Wolffia Protein: ${protein}

Total: $${total}`
  );

  return (
    <>
      <div className="page">

        <section className="products-section">
          <h1 className="title">Premium Wellness Collection</h1>

          <div className="product-grid">

            {/* Ginger Shampoo */}
            <div className="product-card">
              <img
                src="/images/ginger-shampoo.jpg"
                alt="Ginger Shampoo"
              />

              <h2>Ginger Shampoo</h2>

              <p>
                Luxury botanical ginger shampoo designed for scalp care,
                healthy-looking hair, and wellness beauty routines.
              </p>

              <div className="price">$25</div>

              <input
                type="number"
                min="0"
                value={shampoo}
                onChange={(e) => setShampoo(Number(e.target.value))}
              />
            </div>

            {/* Herbal Toothpaste */}
            <div className="product-card">
              <img
                src="/images/herbal-toothpaste.jpg"
                alt="Herbal Toothpaste"
              />

              <h2>Herbal Toothpaste</h2>

              <p>
                Premium herbal toothpaste inspired by natural wellness
                and daily oral care traditions.
              </p>

              <div className="price">$35</div>

              <input
                type="number"
                min="0"
                value={toothpaste}
                onChange={(e) => setToothpaste(Number(e.target.value))}
              />
            </div>

            {/* Wolffia Protein */}
            <div className="product-card">
              <img
                src="/images/wolffia-protein.jpg"
                alt="Wolffia Protein"
              />

              <h2>Wolffia Protein</h2>

              <p>
                Plant-based superfood protein supplement crafted for
                wellness, nutrition, and healthy lifestyles.
              </p>

              <div className="price">$35</div>

              <input
                type="number"
                min="0"
                value={protein}
                onChange={(e) => setProtein(Number(e.target.value))}
              />
            </div>

          </div>
        </section>

        {/* ORDER SUMMARY */}
        <section className="checkout-section">

          <h2>Order Summary</h2>

          <div className="total">
            Total: ${total}
          </div>

          <a
            className="whatsapp-btn"
            href={`https://wa.me/14786972163?text=${whatsappMessage}`}
            target="_blank"
          >
            Order on WhatsApp
          </a>

          <div className="payment-box">
            <p><strong>Zelle:</strong> 478-697-2163</p>
            <p><strong>Venmo:</strong> @xengthao99</p>

            <a
              className="paypal-btn"
              href="https://www.paypal.me/xengthao1999"
              target="_blank"
            >
              Pay with PayPal
            </a>
          </div>

        </section>

        <footer>
          © 2026 Eagle International Import & Export LLC
        </footer>

      </div>

      <style jsx>{`
        .page {
          background: #f4f0ea;
          min-height: 100vh;
          font-family: Arial, Helvetica, sans-serif;
        }

        .products-section {
          padding: 60px 40px;
        }

        .title {
          font-size: 56px;
          font-weight: 900;
          margin-bottom: 50px;
          color: #000;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .product-card {
          background: white;
          border-radius: 22px;
          padding: 24px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06);
        }

        .product-card img {
          width: 100%;
          height: 340px;
          object-fit: contain;
          margin-bottom: 25px;
          border-radius: 12px;
        }

        .product-card h2 {
          font-size: 20px;
          font-weight: 800;
          margin-bottom: 14px;
        }

        .product-card p {
          font-size: 14px;
          line-height: 1.5;
          color: #222;
          margin-bottom: 18px;
        }

        .price {
          font-size: 30px;
          font-weight: bold;
          color: #b8860b;
          margin-bottom: 14px;
        }

        input {
          width: 90px;
          padding: 10px;
          border-radius: 10px;
          border: 1px solid #ddd;
          font-size: 16px;
          text-align: center;
        }

        .checkout-section {
          background: white;
          margin: 60px auto;
          max-width: 900px;
          padding: 50px;
          border-radius: 30px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06);
        }

        .checkout-section h2 {
          font-size: 42px;
          margin-bottom: 20px;
        }

        .total {
          font-size: 36px;
          font-weight: 900;
          color: #b8860b;
          margin-bottom: 30px;
        }

        .whatsapp-btn,
        .paypal-btn {
          display: inline-block;
          padding: 16px 28px;
          border-radius: 40px;
          text-decoration: none;
          font-weight: bold;
          color: white;
          margin: 12px;
          transition: 0.3s;
        }

        .whatsapp-btn {
          background: #25D366;
        }

        .paypal-btn {
          background: #0070ba;
        }

        .whatsapp-btn:hover,
        .paypal-btn:hover {
          transform: scale(1.05);
        }

        .payment-box {
          margin-top: 25px;
          font-size: 18px;
        }

        footer {
          background: #111;
          color: white;
          text-align: center;
          padding: 28px;
          margin-top: 60px;
        }

        @media (max-width: 1000px) {
          .product-grid {
            grid-template-columns: 1fr;
          }

          .title {
            font-size: 38px;
          }

          .products-section {
            padding: 40px 20px;
          }

          .checkout-section {
            margin: 30px 20px;
            padding: 35px 20px;
          }
        }
      `}</style>
    </>
  );
}
