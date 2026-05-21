export default function Home() {
  const products = [
    {
      title: "Ginger Shampoo",
      text: "Luxury botanical ginger shampoo designed for scalp care, healthy-looking hair, and premium wellness beauty routines.",
      image: "https://i.postimg.cc/GpMJcCwx/Shampoo.jpg",
    },
    {
      title: "Herbal Toothpaste",
      text: "Premium herbal toothpaste inspired by natural wellness and daily oral care traditions.",
      image: "https://i.postimg.cc/25TL4F0z/Herbal-Toothpaste.jpg",
    },
    {
      title: "Wolffia Protein",
      text: "Plant-based superfood protein supplement crafted for wellness, nutrition, and healthy lifestyles.",
      image: "https://i.postimg.cc/TY8j20SL/wolffia.jpg",
    },
  ];

  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#f6f1e8", color: "#111" }}>
      <nav style={nav}>
        <img
          src="https://i.postimg.cc/TYZbQ8KP/Chat-GPT-Image-May-20-2026-02-03-52-AM.png"
          alt="Eagle International Logo"
          style={{ height: "90px", objectFit: "contain" }}
        />

        <div style={navLinks}>
          <a href="#about" style={link}>About</a>
          <a href="#products" style={link}>Products</a>
          <a href="#services" style={link}>Services</a>
          <a href="#contact" style={link}>Contact</a>
        </div>
      </nav>

      <section style={hero}>
        <div style={{ maxWidth: "1000px" }}>
          <img
            src="https://i.postimg.cc/TYZbQ8KP/Chat-GPT-Image-May-20-2026-02-03-52-AM.png"
            alt="Eagle International Logo"
            style={{
              width: "230px",
              height: "230px",
              objectFit: "contain",
              margin: "0 auto 30px",
              display: "block",
            }}
          />

          <p style={heroSmall}>PREMIUM WELLNESS • IMPORT • EXPORT</p>

          <h1 style={heroTitle}>Eagle International Import & Export LLC</h1>

          <p style={heroText}>
            Premium wellness, beauty, and botanical products for global markets.
          </p>

          <a href="#contact" style={button}>Request a Quote</a>
        </div>
      </section>

      <section id="about" style={section}>
        <p style={goldSmall}>ABOUT OUR COMPANY</p>
        <h2 style={heading}>Trusted Global Wellness Trade Partner</h2>
        <p style={paragraph}>
          Eagle International Import & Export LLC is a USA-based company specializing in premium
          wellness, beauty, and botanical products. We focus on high-quality sourcing,
          international trade, and long-term global business relationships.
        </p>
      </section>

      <section id="products" style={section}>
        <p style={goldSmall}>FEATURED PRODUCTS</p>
        <h2 style={heading}>Premium Wellness Collection</h2>

        <div style={grid}>
          {products.map((item) => (
            <div key={item.title} style={card}>
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "20px",
                  marginBottom: "22px",
                }}
              />

              <h3 style={{ fontSize: "24px", marginBottom: "12px" }}>
                {item.title}
              </h3>

              <p style={{ color: "#555", lineHeight: "1.7" }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" style={darkSection}>
        <p style={goldSmall}>WHY WORK WITH US</p>
        <h2 style={{ ...heading, color: "white" }}>
          Professional. Reliable. Global.
        </h2>
        <p style={{ ...paragraph, color: "#ddd", margin: "0 auto" }}>
          We help connect international buyers, suppliers, and wellness brands with high-quality
          products, reliable communication, and professional import/export support.
        </p>
      </section>

      <section id="contact" style={section}>
        <p style={goldSmall}>CONTACT</p>
        <h2 style={heading}>Let’s Build Business Together</h2>
        <p style={paragraph}>
          For wholesale inquiries, partnerships, sourcing, and international trade opportunities,
          contact Eagle International Import & Export LLC.
        </p>

        <div style={contactBox}>
          <p><strong>Company:</strong> Eagle International Import & Export LLC</p>
          <p><strong>Location:</strong> Georgia, USA</p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@eagleinternationalimportexport.com" style={goldLink}>
              info@eagleinternationalimportexport.com
            </a>
          </p>
          <p>
            <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/12094870789"
              target="_blank"
              rel="noopener noreferrer"
              style={goldLink}
            >
              +1 (209) 487-0789
            </a>
          </p>
        </div>
      </section>

      <a
        href="https://wa.me/12094870789"
        target="_blank"
        rel="noopener noreferrer"
        style={whatsappButton}
      >
        WhatsApp Us
      </a>

      <footer style={footer}>
        © 2026 Eagle International Import & Export LLC. All Rights Reserved.
      </footer>
    </main>
  );
}

const nav = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "18px 8%",
  background: "#050505",
  color: "white",
  position: "sticky",
  top: 0,
  zIndex: 1000,
};

const navLinks = {
  display: "flex",
  gap: "28px",
  fontSize: "15px",
  fontWeight: "600",
};

const link = {
  color: "white",
  textDecoration: "none",
};

const hero = {
  minHeight: "760px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: "90px 8%",
  background:
    "radial-gradient(circle at top, rgba(212,175,55,0.18), transparent 30%), linear-gradient(135deg, #050505, #241b10, #000)",
  color: "white",
};

const heroSmall = {
  color: "#d4af37",
  letterSpacing: "4px",
  fontWeight: "bold",
  marginBottom: "20px",
};

const heroTitle = {
  fontSize: "68px",
  lineHeight: "1.08",
  margin: "18px 0",
};

const heroText = {
  fontSize: "24px",
  color: "#e8e0d2",
  lineHeight: "1.7",
  marginBottom: "38px",
  maxWidth: "900px",
  marginLeft: "auto",
  marginRight: "auto",
};

const button = {
  display: "inline-block",
  background: "#d4af37",
  color: "#111",
  padding: "18px 36px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "17px",
};

const section = {
  padding: "90px 8%",
  maxWidth: "1250px",
  margin: "0 auto",
};

const goldSmall = {
  color: "#b68b1d",
  fontWeight: "bold",
  letterSpacing: "2px",
  fontSize: "14px",
};

const heading = {
  fontSize: "48px",
  margin: "14px 0 20px",
};

const paragraph = {
  fontSize: "19px",
  lineHeight: "1.9",
  color: "#444",
  maxWidth: "900px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "30px",
  marginTop: "40px",
};

const card = {
  background: "white",
  padding: "26px",
  borderRadius: "24px",
  boxShadow: "0 14px 35px rgba(0,0,0,0.08)",
  border: "1px solid #eee",
};

const darkSection = {
  padding: "90px 8%",
  background: "#0d0d0d",
  color: "white",
  textAlign: "center",
};

const contactBox = {
  marginTop: "35px",
  padding: "35px",
  background: "white",
  borderRadius: "24px",
  boxShadow: "0 14px 35px rgba(0,0,0,0.08)",
};

const goldLink = {
  color: "#b68b1d",
  textDecoration: "none",
  fontWeight: "bold",
};

const whatsappButton = {
  position: "fixed",
  right: "24px",
  bottom: "24px",
  background: "#25D366",
  color: "white",
  padding: "15px 22px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: "bold",
  boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
  zIndex: 999,
};

const footer = {
  background: "#050505",
  color: "#aaa",
  textAlign: "center",
  padding: "30px",
};
