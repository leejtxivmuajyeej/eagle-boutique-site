import { useState } from "react";

export default function Home() {
  const [shampoo, setShampoo] = useState(0);
  const [toothpaste, setToothpaste] = useState(0);
  const [wolffia, setWolffia] = useState(0);

  const total = shampoo * 25 + toothpaste * 35 + wolffia * 35;

  const whatsappMessage = encodeURIComponent(
    `Hello, I want to order:
Ginger Shampoo: ${shampoo}
Herbal Toothpaste: ${toothpaste}
Wolffia Protein: ${wolffia}
Total: $${total}`
  );

  return (
    <>
      <section className="products-section" id="products">
        <h1>Premium Wellness Collection</h1>

        <div className="product-grid">
          <div className="product-card">
            <img src="/images/Shampoo.jpg" alt="Ginger Shampoo" />
            <h3>Ginger Shampoo</h3>
            <p>
              Luxury botanical ginger shampoo designed for scalp care,
              healthy-looking hair, and wellness beauty routines.
            </p>
            <h4>$25</h4>
            <input
              type="number"
              min="0"
              value={shampoo}
              onChange={(e) => setShampoo(Number(e.target.value))}
            />
          </div>

          <div className="product-card">
            <img src="/images/Herbal Toothpaste.jpg" alt="Herbal Toothpaste" />
            <h3>Herbal Toothpaste</h3>
            <p>
              Premium herbal toothpaste inspired by natural wellness and daily
              oral care traditions.
            </p>
            <h4>$35</h4>
            <input
              type="number"
              min="0"
              value={toothpaste}
              onChange={(e) => setToothpaste(Number(e.target.value))}
            />
          </div>

          <div className="product-card">
            <img src="/images/wolffia.jpg" alt="Wolffia Protein" />
            <h3>Wolffia Protein</h3>
            <p>
              Plant-based superfood protein supplement crafted for wellness,
              nutrition, and healthy lifestyles.
            </p>
            <h4>$35</h4>
            <input
              type="number"
              min="0"
              value={wolffia}
              onChange={(e) => setWolffia(Number(e.target.value))}
            />
          </div>
        </div>
      </section>

      <section className="checkout">
        <h2>Order Summary</h2>
        <div className="total">Total: ${total}</div>

        <a
          className="whatsapp"
          href={`https://wa.me/14786972163?text=${whatsappMessage}`}
          target="_blank"
        >
          Order on WhatsApp
        </a>

        <p><strong>Zelle:</strong> 478-697-2163</p>
        <p><strong>Venmo:</strong> @xengthao99</p>
        <a className="paypal" href="https://www.paypal.me/xengthao1999" target="_blank">
          PayPal
        </a>
      </section>

      <footer>
        © 2026 Eagle International Import & Export LLC
      </footer>

      <style jsx>{`
        body {
          margin: 0;
        }

        .products-section {
          background: #f4f0ea;
          padding: 80px 40px;
          font-family: Arial, Helvetica, sans-serif;
        }

        h1 {
          font-size: 46px;
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
          border-radius: 18px;
          padding: 22px 24px 32px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
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
          font-weight: 800;
          margin-bottom: 14px;
        }

        .product-card p {
          font-size: 14px;
          line-height: 1.35;
          margin-bottom: 18px;
        }

        .product-card h4 {
          font-size: 22px;
          color: #b8860b;
          margin: 10px 0;
        }

        input {
          width: 80px;
          padding: 9px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 16px;
          text-align: center;
        }

        .checkout {
          background: white;
          padding: 40px;
          text-align: center;
          font-family: Arial, Helvetica, sans-serif;
        }

        .checkout h2 {
          font-size: 34px;
        }

        .total {
          font-size: 30px;
          font-weight: 900;
          color: #b8860b;
          margin-bottom: 25px;
        }

        .whatsapp,
        .paypal {
          display: block;
          max-width: 320px;
          margin: 12px auto;
          padding: 14px 20px;
          border-radius: 40px;
          text-decoration: none;
          color: white;
          font-weight: bold;
        }

        .whatsapp {
          background: #25d366;
        }

        .paypal {
          background: #0070ba;
        }

        footer {
          text-align: center;
          padding: 30px;
          background: #111;
          color: white;
          font-family: Arial, Helvetica, sans-serif;
        }

        @media (max-width: 900px) {
          .product-grid {
            grid-template-columns: 1fr;
          }

          h1 {
            font-size: 34px;
          }

          .products-section {
            padding: 45px 20px;
          }
        }
      `}</style>
    </>
  );
}
