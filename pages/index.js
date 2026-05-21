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

          <div className="goldLine">◆</div>

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
                <div className="imageWrap">
                  <img src={product.image} alt={product.name} />
                </div>

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
          padding: 60px 5% 100px;
          background:
            radial-gradient(circle at top center, rgba(255,255,210,0.95), rgba(255,255,255,0.38) 28%, transparent 48%),
            radial-gradient(circle at left center, rgba(52,89,32,0.55), transparent 34%),
            radial-gradient(circle at right center, rgba(63,118,47,0.55), transparent 34%),
            linear-gradient(180deg, #dbe8a8 0%, #f7f0d8 48%, #f4efe6 100%);
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 8% 8%, rgba(18,70,22,0.45), transparent 18%),
            radial-gradient(circle at 94% 20%, rgba(42,100,34,0.42), transparent 22%),
            radial-gradient(circle at 0% 90%, rgba(15,70,23,0.50), transparent 18%);
          filter: blur(2px);
          pointer-events: none;
        }

        .hero::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 38%;
          background:
            linear-gradient(180deg, rgba(255,255,255,0), rgba(245,241,232,0.95)),
            repeating-linear-gradient(
              135deg,
              rgba(180,180,180,0.16) 0px,
              rgba(180,180,180,0.16) 1px,
              transparent 1px,
              transparent 90px
            );
          pointer-events: none;
        }

        .content {
          position: relative;
          z-index: 2;
          max-width: 1350px;
          margin: 0 auto;
          text-align: center;
        }

        .brand {
          margin: 0 0 22px;
          letter-spacing: 5px;
          font-size: 15px;
          font-weight: 800;
          color: #0b3921;
        }

        h1 {
          margin: 0;
          font-family: Georgia, serif;
          font-size: clamp(46px, 7vw, 92px);
          line-height: 1.05;
          color: #07391f;
          font-weight: 700;
        }

        .goldLine {
          width: 270px;
          margin: 24px auto 18px;
          color: #b58a2a;
          font-size: 18px;
          border-top: 1px solid rgba(181,138,42,0.7);
          line-height: 0;
        }

        .subtitle {
          margin: 0 0 38px;
          font-size: 23px;
          color: #333;
        }

        .products {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 38px;
          align-items: end;
        }

        .product {
          text-decoration: none;
          color: #111;
          padding: 18px 18px 28px;
          border-radius: 28px;
          transition: 0.35s ease;
          transform-style: preserve-3d;
        }

        .product:hover {
          transform: translateY(-12px) scale(1.03);
          background: rgba(255,255,255,0.34);
          box-shadow: 0 25px 60px rgba(0,0,0,0.18);
        }

        .imageWrap {
          height: 390px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          perspective: 900px;
        }

        .product img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 22px 24px rgba(0,0,0,0.28));
          transform: rotateX(2deg);
          transition: 0.35s ease;
        }

        .product:hover img {
          transform: rotateX(0deg) rotateY(-4deg) scale(1.06);
          filter: drop-shadow(0 30px 30px rgba(0,0,0,0.32));
        }

        .product h2 {
          margin: 16px 0 10px;
          font-family: Georgia, serif;
          font-size: 29px;
          color: #07391f;
        }

        .product p {
          max-width: 360px;
          margin: 0 auto 18px;
          font-size: 16px;
          line-height: 1.7;
          color: #111;
        }

        .product span {
          display: inline-block;
          background: linear-gradient(135deg, #0d6f35, #18c45c);
          color: white;
          padding: 12px 26px;
          border-radius: 999px;
          font-weight: 800;
          box-shadow: 0 8px 20px rgba(0,0,0,0.18);
        }

        .whatsapp {
          position: fixed;
          right: 28px;
          bottom: 28px;
          background: #18c45c;
          color: white;
          padding: 17px 30px;
          border-radius: 999px;
          font-weight: 800;
          text-decoration: none;
          box-shadow: 0 10px 25px rgba(0,0,0,0.25);
          z-index: 999;
        }

        @media (max-width: 900px) {
          .hero {
            padding: 42px 5% 120px;
          }

          .brand {
            font-size: 12px;
            letter-spacing: 3px;
          }

          .subtitle {
            font-size: 18px;
          }

          .products {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .imageWrap {
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
