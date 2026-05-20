export default function Home() {
  const products = [
    { title: "Fresh Ginger", text: "Premium agricultural sourcing for wholesale and international buyers." },
    { title: "Specialty Rice", text: "Unique rice products from trusted Asian supply partners." },
    { title: "Wolffia Protein", text: "Plant-based wellness and supplement product opportunities." },
    { title: "Beauty Products", text: "Beauty, personal care, and wellness products for global markets." },
    { title: "Import Services", text: "Support for sourcing, documentation, and international trade." },
    { title: "Export Services", text: "Connecting quality products from the USA to overseas buyers." },
  ];

  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#f6f1e8", color: "#111" }}>
      <nav style={nav}>
        <strong style={{ fontSize: "20px", color: "#d4af37" }}>EAGLE INTERNATIONAL</strong>
        <div style={navLinks}>
          <a href="#about" style={link}>About</a>
          <a href="#products" style={link}>Products</a>
          <a href="#services" style={link}>Services</a>
          <a href="#contact" style={link}>Contact</a>
        </div>
      </nav>

      <section style={hero}>
        <div style={{ maxWidth: "950px" }}>
          <p style={{ color: "#d4af37", letterSpacing: "3px", fontWeight: "bold" }}>
            GLOBAL SOURCING • IMPORT • EXPORT
          </p>
          <h1 style={heroTitle}>
            Eagle International Import & Export LLC
          </h1>
          <p style={heroText}>
            Connecting premium agricultural, wellness, beauty, and specialty products to global markets.
          </p>
          <a href="#contact" style={button}>Request a Quote</a>
        </div>
      </section>

      <section id="about" style={section}>
        <p style={goldSmall}>ABOUT OUR COMPANY</p>
        <h2 style={heading}>Trusted Global Trade Partner</h2>
        <p style={paragraph}>
          Eagle International Import & Export LLC is a USA-based company specializing in sourcing,
          importing, exporting, and distributing quality products across international markets.
          We focus on long-term relationships, reliable communication, and professional trade support.
        </p>
      </section>

      <section id="products" style={section}>
        <p style={goldSmall}>PRODUCTS & SERVICES</p>
        <h2 style={heading}>What We Offer</h2>
        <div style={grid}>
          {products.map((item) => (
            <div key={item.title} style={card}>
              <div style={imageBox}></div>
              <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>{item.title}</h3>
              <p style={{ color: "#555", lineHeight: "1.6" }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" style={darkSection}>
        <p style={goldSmall}>WHY WORK WITH US</p>
        <h2 style={{ ...heading, color: "white" }}>Professional. Reliable. Global.</h2>
        <p style={{ ...paragraph, color: "#ddd", margin: "0 auto" }}>
          We help connect suppliers, buyers, and logistics partners with a focus on quality,
          trust, clear communication, product sourcing, and international business growth.
        </p>
      </section>

      <section id="contact" style={section}>
        <p style={goldSmall}>CONTACT</p>
        <h2 style={heading}>Let’s Build Business Together</h2>
        <p style={paragraph}>
          For product sourcing, wholesale inquiries, import/export support, or partnership opportunities,
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
  padding: "22px 8%",
  background: "#0f0f0f",
  color: "white"
};

const navLinks = {
  display: "flex",
  gap: "22px",
  fontSize: "14px"
};

const link = {
  color: "white",
  textDecoration: "none"
};

const hero = {
  minHeight: "520px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: "70px 8%",
  background: "linear-gradient(135deg, #050505, #241b10, #000)",
  color: "white"
};

const heroTitle = {
  fontSize: "58px",
  lineHeight: "1.1",
  margin: "18px 0"
};

const heroText = {
  fontSize: "21px",
  color: "#e8e0d2",
  lineHeight: "1.6",
  marginBottom: "34px"
};

const button = {
  display: "inline-block",
  background: "#d4af37",
  color: "#111",
  padding: "15px 30px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: "bold"
};

const section = {
  padding: "80px 8%",
  maxWidth: "1200px",
  margin: "0 auto"
};

const goldSmall = {
  color: "#b68b1d",
  fontWeight: "bold",
  letterSpacing: "2px",
  fontSize: "14px"
};

const heading = {
  fontSize: "42px",
  margin: "12px 0 18px"
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.8",
  color: "#444",
  maxWidth: "850px"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "24px",
  marginTop: "35px"
};

const card = {
  background: "white",
  padding: "24px",
  borderRadius: "22px",
  boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
  border: "1px solid #eee"
};

const imageBox = {
  height: "150px",
  borderRadius: "18px",
  background: "linear-gradient(135deg, #eee, #d8caa8)",
  marginBottom: "20px"
};

const darkSection = {
  padding: "80px 8%",
  background: "#111",
  color: "white",
  textAlign: "center"
};

const contactBox = {
  marginTop: "30px",
  padding: "30px",
  background: "white",
  borderRadius: "22px",
  boxShadow: "0 12px 30px rgba(0,0,0,0.08)"
};

const goldLink = {
  color: "#b68b1d",
  textDecoration: "none",
  fontWeight: "bold"
};

const whatsappButton = {
  position: "fixed",
  right: "22px",
  bottom: "22px",
  background: "#25D366",
  color: "white",
  padding: "14px 20px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: "bold",
  boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
  zIndex: 999
};

const footer = {
  background: "#050505",
  color: "#aaa",
  textAlign: "center",
  padding: "28px"
};
