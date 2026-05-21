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

          <p className="brand">
            EAGLE INTERNATIONAL IMPORT EXPORT
          </p>

          <h1>
            Premium Wellness Collection
          </h1>

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

                <img
                  src={product.image}
                  alt={product.name}
                />

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
          "Hello, I want to order your wellness products."
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

          background: #eef3ea;
        }

        .hero {
          min-height: 100vh;

          padding: 70px 6% 120px;

          background:
            linear-gradient(
              rgba(255,255,255,0.20),
              rgba(255,255,255,0.72)
            ),

            url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2200&q=100");

          background-size: cover;

          background-position: center;

          background-repeat: no-repeat;

          position: relative;

          overflow: hidden;
        }

        .hero::before {
          content: "";

          position: absolute;

          inset: 0;

          background:
            radial-gradient(circle at top left,
            rgba(255,255,255,0.45),
            transparent 35%),

            radial-gradient(circle at bottom right,
            rgba(255,255,255,0.28),
            transparent 30%);

          pointer-events: none;
        }

        .content {
          position: relative;

          z-index: 2;

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

          font-family: Georgia, serif;

          font-size: clamp(48px, 7vw, 92px);

          line-height: 1.05;

          color: #07391f;

          font-weight: 700;
        }

        .goldLine {
          width: 260px;

          height: 2px;

          background: #b58a2a;

          margin: 28px auto;
        }

        .subtitle {
          margin: 0 0 55px;

          font-size: 24px;

          color: #2e2e2e;
        }

        .products {
          display: grid;

          grid-template-columns: repeat(3, 1fr);

          gap: 45px;

          align-items: end;
        }

        .product {
          display: block;

          text-decoration: none;

          color: #111;

          padding: 26px 22px 32px;

          border-radius: 34px;

          background: rgba(255,255,255,0.18);

          backdrop-filter: blur(12px);

          border: 1px solid rgba(255,255,255,0.35);

          transition: 0.35s ease;
        }

        .product:hover {
          transform: translateY(-10px);

          background: rgba(255,255,255,0.32);

          box-shadow: 0 22px 55px rgba(0,0,0,0.16);
        }

        .product img {
          width: 100%;

          height: 420px;

          object-fit: contain;

          margin-bottom: 22px;
        }

        .product h2 {
          margin: 0 0 14px;

          font-family: Georgia, serif;

          font-size: 34px;

          color: #07391f;
        }

        .product p {
          max-width: 360px;

          margin: 0 auto 18px;

          font-size: 18px;

          line-height: 1.8;

          color: #111;
        }

        .product span {
          display: inline-block;

          margin-top: 12px;

          background: #18c45c;

          color: white;

          padding: 14px 28px;

          border-radius: 999px;

          font-weight: 800;

          box-shadow: 0 8px 18px rgba(24,196,92,0.32);
        }

        .whatsapp {
          position: fixed;

          right: 28px;

          bottom: 28px;

          background: #18c45c;

          color: white;

          padding: 18px 30px;

          border-radius: 999px;

          font-weight: 800;

          text-decoration: none;

          box-shadow: 0 10px 25px rgba(0,0,0,0.25);

          z-index: 999;
        }

        @media (max-width: 900px) {

          .hero {
            padding: 45px 5% 120px;
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

            gap: 30px;
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
