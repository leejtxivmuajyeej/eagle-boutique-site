export default function Home() {
  const whatsappNumber = "YOUR_PHONE_NUMBER"; // Example: 14785551234

  const products = [
    {
      name: "Ginger Shampoo",
      image: "https://i.postimg.cc/GpMJcCwx/Shampoo.jpg",
      text: "Luxury botanical ginger shampoo designed for scalp care, healthy-looking hair, and wellness beauty routines.",
      order: "I want to order Ginger Shampoo",
    },
    {
      name: "Herbal Toothpaste",
      image: "https://i.postimg.cc/25TL4F0z/Herbal-Toothpaste.jpg",
      text: "Premium herbal toothpaste inspired by natural wellness and daily oral care traditions.",
      order: "I want to order Herbal Toothpaste",
    },
    {
      name: "Wolffia Protein",
      image: "https://i.postimg.cc/TY8j20SL/wolffia.jpg",
      text: "Plant-based superfood protein supplement crafted for wellness, nutrition, and healthy lifestyles.",
      order: "I want to order Wolffia Protein",
    },
  ];

  return (
    <main className="page">
      <section className="hero">
        <div className="overlay">
          <p className="brand">EAGLE INTERNATIONAL IMPORT EXPORT</p>
          <h1>Premium Wellness Collection</h1>
          <div className="line"></div>
          <p className="subtitle">
            Nature. Science. Wellness. Crafted for a Better You.
          </p>

          <div className="products">
            {products.map((product) => (
              <a
                key={product.name}
                className="product"
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  product.order
                )}`}
                target="_blank"
              >
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.text}</p>
                <span>Click to Order</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <a
        className="whatsapp"
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          "Hello, I want to order your products."
        )}`}
        target="_blank"
      >
        💬 Chat on WhatsApp
      </a>

      <style jsx>{`
        .page {
          min-height: 100vh;
          font-family: Arial, Helvetica, sans-serif;
          background: #f7f2ea;
        }

        .hero {
          min-height: 100vh;
          background:
            linear-gradient(
              rgba(255, 255, 255, 0.2),
              rgba(255, 255, 255, 0.82)
            ),
            url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1800&q=80");
          background-size: cover;
          background-position: center;
          padding: 70px 6% 110px;
        }

        .overlay {
          max-width: 1250px;
          margin: auto;
          text-align: center;
        }

        .brand {
          letter-spacing: 5px;
          font-weight: 700;
          color: #123c26;
          font-size: 16px;
          margin-bottom: 25px;
        }

        h1 {
          font-size: clamp(48px, 7vw, 92px);
          color: #07391f;
          margin: 0;
          font-family: Georgia, serif;
          line-height: 1.05;
        }

        .line {
          width: 260px;
          height: 2px;
          background: #b58a2a;
          margin: 25px auto;
          position: relative;
        }

        .subtitle {
          font-size: 24px;
          color: #333;
          margin-bottom: 45px;
        }

        .products {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 45px;
          align-items: end;
        }

        .product {
          text-decoration: none;
          color: #111;
          padding: 20px;
          border-radius: 28px;
          transition: 0.3s ease;
        }

        .product:hover {
          background: rgba(255, 255, 255, 0.65);
          transform: translateY(-8px);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.12);
        }

        .product img {
          width: 100%;
          height: 360px;
          object-fit: contain;
          margin-bottom: 20px;
        }

        .product h2 {
          font-size: 30px;
          color: #07391f;
          margin-bottom: 12px;
          font-family: Georgia, serif;
        }

        .product p {
          font-size: 17px;
          line-height: 1.7;
          max-width: 360px;
          margin: 0 auto 16px;
        }

        .product span {
          display: inline-block;
          margin-top: 10px;
          background: #18c45c;
          color: white;
          padding: 12px 22px;
          border-radius: 999px;
          font-weight: 800;
        }

        .whatsapp {
          position: fixed;
          right: 28px;
          bottom: 28px;
          background: #18c45c;
          color: white;
          padding: 16px 26px;
          border-radius: 999px;
          font-weight: 800;
          text-decoration: none;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
          z-index: 999;
        }

        @media (max-width: 900px) {
          .hero {
            padding: 45px 5% 120px;
          }

          .products {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .product img {
            height: 300px;
          }

          .subtitle {
            font-size: 19px;
          }

          .whatsapp {
            left: 20px;
            right: 20px;
            text-align: center;
          }
        }
      `}</style>
    </main>
  );
}
