```jsx
import { useState } from "react";

export default function Home() {
  const [shampoo, setShampoo] = useState(0);
  const [toothpaste, setToothpaste] = useState(0);
  const [protein, setProtein] = useState(0);

  // PRODUCT TOTAL
  const subtotal =
    shampoo * 25 +
    toothpaste * 35 +
    protein * 35;

  // TOTAL ITEMS
  const totalItems =
    shampoo + toothpaste + protein;

  // SHIPPING RULE
  // 1-2 items = $10 shipping
  // 3+ items = FREE shipping
  const shipping =
    totalItems === 0
      ? 0
      : totalItems <= 2
      ? 10
      : 0;

  // FINAL TOTAL
  const total = subtotal + shipping;

  const whatsappMessage = encodeURIComponent(
`Hello, I want to order:

Ginger Shampoo: ${shampoo}
Herbal Toothpaste: ${toothpaste}
Wolffia Protein: ${protein}

Shipping: ${
  totalItems >= 3
    ? "FREE"
    : totalItems > 0
    ? "$10"
    : "$0"
}

Total: $${total}`
  );

  return (
    <>
      <div className="page">

        {/* PRODUCTS */}
        <section className="products-section">

          <h1 className="title">
            Premium Wellness Collection
          </h1>

          <p className="subtitle">
            Luxury wellness products made simple.
          </p>

          <div className="product-grid">

            {/* GINGER SHAMPOO */}
            <div className="product-card">

              <img
                src="/images/ginger-shampoo.jpg"
                alt="Ginger Shampoo"
              />

              <h2>Ginger Shampoo</h2>

              <p>
                Luxury botanical ginger shampoo designed
                for scalp care, healthy-looking hair,
                and wellness beauty routines.
              </p>

              <div className="price">$25</div>

              <input
                type="number"
                min="0"
                value={shampoo}
                onChange={(e) =>
                  setShampoo(Number(e.target.value))
                }
              />

            </div>

            {/* HERBAL TOOTHPASTE */}
            <div className="product-card">

              <img
                src="/images/herbal-toothpaste.jpg"
                alt="Herbal Toothpaste"
              />

              <h2>Herbal Toothpaste</h2>

              <p>
                Premium herbal toothpaste inspired by
                natural wellness and daily oral care
                traditions.
              </p>

              <div className="price">$35</div>

              <input
                type="number"
                min="0"
                value={toothpaste}
                onChange={(e) =>
                  setToothpaste(Number(e.target.value))
                }
              />

            </div>

            {/* WOLFFIA PROTEIN */}
            <div className="product-card">

              <img
                src="/images/wolffia-protein.jpg"
                alt="Wolffia Protein"
              />

              <h2>Wolffia Protein</h2>

              <p>
                Plant-based superfood protein supplement
                crafted for wellness, nutrition, and
                healthy lifestyles.
              </p>

              <div className="price">$35</div>

              <input
                type="number"
                min="0"
                value={protein}
                onChange={(e) =>
                  setProtein(Number(e.target.value))
                }
              />

            </div>

          </div>

        </section>

        {/* ORDER SUMMARY */}
        <section className="checkout-section">

          <h2>Order Summary</h2>

          <div className="summary-line">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>

          <div className="summary-line">
            <span>Shipping</span>

            <span>
              {
                totalItems >= 3
                  ? "FREE"
                  : totalItems > 0
                  ? "$10"
                  : "$0"
              }
            </span>
          </div>

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

            <p>
              <strong>Zelle:</strong>
              {" "}478-697-2163
            </p>

            <p>
              <strong>Venmo:</strong>
              {" "}@xengthao99
            </p>

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
        .page{
          background:#f4f0ea;
          min-height:100vh;
          font-family:Arial, Helvetica, sans-serif;
        }

        .products-section{
          padding:70px 40px;
        }

        .title{
          font-size:68px;
          font-weight:900;
          letter-spacing:-2px;
          margin-bottom:20px;
          color:#000;
        }

        .subtitle{
          font-size:20px;
          color:#666;
          margin-bottom:55px;
        }

        .product-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:30px;
        }

        .product-card{
          background:white;
          border-radius:22px;
          padding:28px;
          text-align:center;
          border:1px solid rgba(0,0,0,0.05);
          box-shadow:0 10px 30px rgba(0,0,0,0.06);
          transition:0.3s;
        }

        .product-card:hover{
          transform:translateY(-6px);
          box-shadow:0 20px 40px rgba(0,0,0,0.08);
        }

        .product-card img{
          width:100%;
          height:420px;
          object-fit:contain;
          margin-bottom:28px;
          border-radius:12px;
        }

        .product-card h2{
          font-size:22px;
          font-weight:900;
          margin-bottom:14px;
        }

        .product-card p{
          font-size:15px;
          line-height:1.7;
          color:#444;
          margin-bottom:20px;
        }

        .price{
          font-size:32px;
          font-weight:900;
          color:#b8860b;
          margin-bottom:16px;
        }

        input{
          width:90px;
          height:48px;
          border-radius:14px;
          border:1px solid #ddd;
          font-size:18px;
          text-align:center;
        }

        .checkout-section{
          background:white;
          margin:70px auto;
          max-width:900px;
          padding:55px;
          border-radius:30px;
          text-align:center;
          box-shadow:0 10px 30px rgba(0,0,0,0.06);
        }

        .checkout-section h2{
          font-size:42px;
          margin-bottom:20px;
        }

        .summary-line{
          display:flex;
          justify-content:space-between;
          max-width:420px;
          margin:14px auto;
          font-size:20px;
          color:#333;
        }

        .total{
          font-size:38px;
          font-weight:900;
          color:#b8860b;
          margin-top:28px;
          margin-bottom:30px;
        }

        .whatsapp-btn,
        .paypal-btn{
          display:inline-block;
          padding:16px 30px;
          border-radius:40px;
          text-decoration:none;
          font-weight:bold;
          color:white;
          margin:12px;
          transition:0.3s;
        }

        .whatsapp-btn{
          background:#25D366;
        }

        .paypal-btn{
          background:#0070ba;
        }

        .whatsapp-btn:hover,
        .paypal-btn:hover{
          transform:scale(1.05);
        }

        .payment-box{
          margin-top:25px;
          font-size:18px;
        }

        footer{
          background:#111;
          color:white;
          text-align:center;
          padding:28px;
          margin-top:60px;
        }

        @media (max-width:1000px){

          .product-grid{
            grid-template-columns:1fr;
          }

          .title{
            font-size:40px;
          }

          .products-section{
            padding:45px 20px;
          }

          .checkout-section{
            margin:35px 20px;
            padding:35px 20px;
          }

          .product-card img{
            height:330px;
          }
        }
      `}</style>
    </>
  );
}
```
