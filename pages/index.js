export default function Home() {
  const whatsappNumber = "12094870789";

  const products = [
    {
      name: "Ginger Shampoo",
      image: "https://i.postimg.cc/GpMJcCwx/Shampoo.jpg",
      text: "Luxury botanical ginger shampoo designed for scalp care, healthy-looking hair, and wellness beauty routines.",
      order: "Hello, I want to order Ginger Shampoo.",
    },
    {
      name: "Herbal Toothpaste",
      image: "https://i.postimg.cc/25TL4F0z/Herbal-Toothpaste.jpg",
      text: "Premium herbal toothpaste inspired by natural wellness and daily oral care traditions.",
      order: "Hello, I want to order Herbal Toothpaste.",
    },
    {
      name: "Wolffia Protein",
      image: "https://i.postimg.cc/TY8j20SL/wolffia.jpg",
      text: "Plant-based superfood protein supplement crafted for wellness, nutrition, and healthy lifestyles.",
      order: "Hello, I want to order Wolffia Protein.",
    },
  ];

  return (
    <main className="page">
      <section className="hero">
        <div className="content">
          <p className="brand">EAGLE INTERNATIONAL IMPORT EXPORT</p>

          <h1>Premium Wellness Collection</h1>

          <div className="goldLine"></div>

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
                rel="noopener noreferrer"
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
        rel="noopener noreferrer"
      >
        💬 Chat on WhatsApp
      </a>

      <style jsx>{`
        .page {
          min-height: 100vh;
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: #f7f2ea;
        }

        .hero {
          min-height: 100vh;
          padding: 70px 6% 120px;
          background:
            linear-gradient(
              rgba(255, 255, 255, 0.12),
              rgba(255, 255, 255, 0.82)
            ),
            url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2000&q=90");
          background-size: cover;
          background-position: center;
        }

        .content {
          max-width: 1300px;
          margin: 0 auto;
          text-align: center;
        }

        .brand {
          margin: 0 0 26px;
          letter-spacing: 5px;
          font-size: 16px;
          font-weight: 800;
          color: #123c26;
        }

        h1 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(46px, 7vw, 92px);
          line-height: 1.05;
          color: #07391f;
          font-weight: 700;
        }

        .goldLine {
          width: 280px;
          height: 2px;
          background: #b58a2a;
          margin: 26px auto;
        }

        .subtitle {
          margin: 0 0 45px;
          font-size: 24px;
          color: #333;
        }

        .products {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 42px;
          align-items: end;
        }

        .product {
          display: block;
          text-decoration: none;
          color: #111;
          padding: 24px 20px 28px;
          border-radius: 30px;
          transition: 0.3s ease;
        }

        .product:hover {
          background: rgba(255, 255, 255, 0.68);
          transform: translateY(-8px);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.13);
        }

        .product img {
          width: 100%;
          height: 390px;
          object-fit: contain;
          margin-bottom: 18px;
        }

        .product h2 {
          margin: 0 0 12px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 30px;
          color: #07391f;
        }

        .product p {
          max-width: 370px;
          margin: 0 auto 18px;
          font-size: 17px;
          line-height: 1.7;
          color: #111;
        }

        .product span {
          display: inline-block;
          margin-top: 8px;
          background: #18c45c;
          color: white;
          padding: 12px 24px;
          border-radius: 999px;
          font-weight: 800;
          box-shadow: 0 8px 18px rgba(24, 196, 92, 0.32);
        }

        .whatsapp {
          position: fixed;
          right: 28px;
          bottom: 28px;
          background: #18c45c;
          color: white;
          padding: 16px 28px;
          border-radius: 999px;
          font-weight: 800;
          text-decoration: none;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
          z-index: 999;
        }

        @media (max-width: 900px) {
          .hero {
            padding: 42px 5% 120px;
          }

          .brand {
            font-size: 13px;
            letter-spacing: 3px;
          }

          .subtitle {
            font-size: 19px;
          }

          .products {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .product img {
            height: 320px;
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
