import { useState } from "react";

export default function Home() {
  const whatsappNumber = "12094870789";
  const paypal = "https://paypal.me/xengthao1999";
  const venmo = "https://venmo.com/u/xengthao99";
  const zelle = "4786972163";

  const products = [
    {
      name: "Ginger Shampoo",
      image: "https://i.postimg.cc/GpMJcCwx/Shampoo.jpg",
      text: "Luxury botanical ginger shampoo for scalp care and healthy-looking hair.",
    },
    {
      name: "Herbal Toothpaste",
      image: "https://i.postimg.cc/25TL4F0z/Herbal-Toothpaste.jpg",
      text: "Premium herbal toothpaste for fresh daily oral care.",
    },
    {
      name: "Wolffia Protein",
      image: "https://i.postimg.cc/TY8j20SL/wolffia.jpg",
      text: "Plant-based protein supplement for wellness and nutrition.",
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const whatsappMessage = selectedProduct
    ? `Hello, I want to order ${quantity} ${selectedProduct.name}. I will pay by PayPal, Venmo, or Zelle.`
    : "";

  return (
    <main className="page">
      <section className="hero">
        <div className="content">
          <p className="brand">EAGLE INTERNATIONAL IMPORT EXPORT</p>
          <h1>Premium Wellness Collection</h1>
          <div className="goldLine">◆</div>
          <p className="subtitle">Click a product to choose quantity and payment option.</p>

          <div className="products">
            {products.map((product) => (
              <button
                key={product.name}
                className="product"
                onClick={() => {
                  setSelectedProduct(product);
                  setQuantity(1);
                }}
              >
                <div className="imageWrap">
                  <img src={product.image} alt={product.name} />
                </div>
                <h2>{product.name}</h2>
                <p>{product.text}</p>
                <span>Click to Order</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <div className="modalBg" onClick={() => setSelectedProduct(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setSelectedProduct(null)}>
              ×
            </button>

            <img className="modalImg" src={selectedProduct.image} alt={selectedProduct.name} />

            <h2>{selectedProduct.name}</h2>

            <label>Choose Quantity</label>
            <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
              <option value="1">1 Item</option>
              <option value="2">2 Items</option>
              <option value="3">3 Items</option>
              <option value="5">5 Items</option>
              <option value="10">10 Items</option>
            </select>

            <div className="paymentBox">
              <a className="paypalBtn" href={paypal} target="_blank" rel="noopener noreferrer">
                PayPal: @xengthao1999
              </a>

              <p className="note">
                PayPal note: Friends & Family appreciated when available.
              </p>

              <a className="venmoBtn" href={venmo} target="_blank" rel="noopener noreferrer">
                Venmo: @xengthao99
              </a>

              <img
                className="qr"
                src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
                  venmo
                )}`}
                alt="Venmo QR Code"
              />

              <div className="zelleBox">
                <strong>Zelle:</strong> {zelle}
              </div>

              <a
                className="whatsappBtn"
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .page {
          min-height: 100vh;
          font-family: Arial, Helvetica, sans-serif;
          background: #eef3ea;
        }

        .hero {
          min-height: 100vh;
          padding: 60px 5% 100px;
          background:
            radial-gradient(circle at top center, rgba(255,255,210,0.95), rgba(255,255,255,0.38) 28%, transparent 48%),
            radial-gradient(circle at left center, rgba(52,89,32,0.55), transparent 34%),
            radial-gradient(circle at right center, rgba(63,118,47,0.55), transparent 34%),
            linear-gradient(180deg, #dbe8a8 0%, #f7f0d8 48%, #f4efe6 100%);
        }

        .content {
          max-width: 1350px;
          margin: 0 auto;
          text-align: center;
        }

        .brand {
          letter-spacing: 5px;
          font-size: 15px;
          font-weight: 800;
          color: #0b3921;
        }

        h1 {
          font-family: Georgia, serif;
          font-size: clamp(46px, 7vw, 92px);
          color: #07391f;
          margin: 0;
        }

        .goldLine {
          color: #b58a2a;
          margin: 22px auto;
        }

        .subtitle {
          font-size: 22px;
          margin-bottom: 40px;
        }

        .products {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 38px;
        }

        .product {
          border: none;
          cursor: pointer;
          text-align: center;
          background: rgba(255,255,255,0.25);
          border-radius: 30px;
          padding: 22px;
          transition: 0.35s ease;
        }

        .product:hover {
          transform: translateY(-12px) scale(1.03);
          box-shadow: 0 25px 60px rgba(0,0,0,0.18);
        }

        .imageWrap {
          height: 380px;
        }

        .product img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 22px 24px rgba(0,0,0,0.28));
        }

        .product h2 {
          font-family: Georgia, serif;
          font-size: 30px;
          color: #07391f;
        }

        .product p {
          font-size: 16px;
          line-height: 1.7;
        }

        .product span {
          display: inline-block;
          background: #18c45c;
          color: white;
          padding: 13px 25px;
          border-radius: 999px;
          font-weight: 800;
        }

        .modalBg {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.55);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
        }

        .modal {
          background: white;
          width: 100%;
          max-width: 470px;
          border-radius: 28px;
          padding: 28px;
          text-align: center;
          position: relative;
        }

        .close {
          position: absolute;
          right: 18px;
          top: 12px;
          border: none;
          background: none;
          font-size: 34px;
          cursor: pointer;
        }

        .modalImg {
          width: 100%;
          height: 230px;
          object-fit: contain;
        }

        .modal select {
          width: 100%;
          padding: 14px;
          border-radius: 15px;
          margin: 12px 0 20px;
          font-weight: 700;
        }

        .paymentBox {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .paypalBtn,
        .venmoBtn,
        .whatsappBtn {
          padding: 14px;
          border-radius: 999px;
          color: white;
          text-decoration: none;
          font-weight: 800;
        }

        .paypalBtn { background: #0070ba; }
        .venmoBtn { background: #008cff; }
        .whatsappBtn { background: #18c45c; }

        .note {
          font-size: 13px;
          color: #555;
          margin: 0;
        }

        .qr {
          width: 180px;
          height: 180px;
          margin: 0 auto;
          border-radius: 16px;
        }

        .zelleBox {
          background: #f1f1f1;
          padding: 14px;
          border-radius: 16px;
          font-size: 17px;
        }

        @media (max-width: 900px) {
          .products {
            grid-template-columns: 1fr;
          }

          .imageWrap {
            height: 320px;
          }
        }
      `}</style>
    </main>
  );
}
