export default function Home() {
  const products = [
    {
      title: "Fresh Ginger",
      text: "Premium agricultural sourcing for wholesale and international buyers."
    },
    {
      title: "Specialty Rice",
      text: "Unique rice products from trusted Asian supply partners."
    },
    {
      title: "Wolffia Protein",
      text: "Plant-based wellness and supplement product opportunities."
    },
    {
      title: "Beauty Products",
      text: "Beauty, personal care, and wellness products for global markets."
    },
    {
      title: "Import Services",
      text: "Support for sourcing, documentation, and international trade."
    },
    {
      title: "Export Services",
      text: "Connecting quality products from the USA to overseas buyers."
    }
  ];

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f6f1e8",
        color: "#111"
      }}
    >
      {/* NAVBAR */}
      <nav style={nav}>
        <img
          src="https://i.postimg.cc/TYZbQ8KP/Chat-GPT-Image-May-20-2026-02-03-52-AM.png"
          alt="Eagle International Logo"
          style={{
            height: "90px",
            objectFit: "contain"
          }}
        />

        <div style={navLinks}>
          <a href="#about" style={link}>
            About
          </a>

          <a href="#products" style={link}>
            Products
          </a>

          <a href="#services" style={link}>
            Services
          </a>

          <a href="#contact" style={link}>
            Contact
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section style={hero}>
        <div style={{ maxWidth: "1000px" }}>
          {/* BIG CENTER LOGO */}
          <img
            src="https://i.postimg.cc/TYZbQ8KP/Chat-GPT-Image-May-20-2026-02-03-52-AM.png"
            alt="Eagle International Logo"
            style={{
              width: "230px",
              height: "230px",
              objectFit: "contain",
              margin: "0 auto 30px",
              display: "block"
            }}
          />

          <p
            style={{
              color: "#d4af37",
              letterSpacing: "4px",
              fontWeight: "bold",
              marginBottom: "20px"
            }}
          >
            GLOBAL SOURCING • IMPORT • EXPORT
          </p>

          <h1 style={heroTitle}>
            Eagle International Import & Export LLC
          </h1>

          <p style={heroText}>
            Connecting premium agricultural, wellness, beauty,
            and specialty products to global markets.
          </p>

          <a href="#contact" style={button}>
            Request a Quote
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={section}>
        <p style={goldSmall}>ABOUT OUR COMPANY</p>

        <h2 style={heading}>
          Trusted Global Trade Partner
        </h2>

        <p style={paragraph}>
          Eagle International Import & Export LLC is a USA-based company
          specializing in sourcing, importing, exporting, and distributing
          quality products across international markets.
          We focus on long-term relationships, reliable communication,
          and professional trade support.
        </p>
      </section>

      {/* PRODUCTS */}
      <section id="products" style={section}>
        <p style={goldSmall}>PRODUCTS & SERVICES</p>

        <h2 style={heading}>
          What We Offer
        </h2>

        <div style={grid}>
          {products.map((item) => (
            <div key={item.title} style={card}>
              <div style={imageBox}></div>

              <h3
                style={{
                  fontSize: "22px",
                  marginBottom: "10px"
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#555",
                  lineHeight: "1.6"
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={darkSection}>
        <p style={goldSmall}>WHY WORK WITH US</p>

        <h2
          style={{
            ...heading,
            color: "white"
          }}
        >
          Professional. Reliable. Global.
        </h2>

        <p
          style={{
            ...paragraph,
            color: "#ddd",
            margin: "0 auto"
          }}
        >
          We help connect suppliers, buyers, and logistics partners
          with a focus on quality, trust, clear communication,
          product sourcing, and international business growth.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" style={section}>
        <p style={goldSmall}>CONTACT</p>

        <h2 style={heading}>
          Let’s Build Business Together
        </h2>

        <p style={paragraph}>
          For product sourcing, wholesale inquiries,
          import/export support, or partnership opportunities,
          contact Eagle International Import & Export LLC.
        </p>

        <div style={contactBox}>
          <p>
            <strong>Company:</strong>{" "}
            Eagle International Import & Export LLC
          </p>

          <p>
            <strong>Location:</strong> Georgia, USA
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@eagleinternationalimportexport.com"
              style={goldLink}
            >
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

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/12094870789"
        target="_blank"
        rel="noopener noreferrer"
        style={whatsappButton}
      >
        WhatsApp Us
      </a>

      {/* FOOTER */}
      <footer style={footer}>
        © 2026 Eagle International Import & Export LLC.
        All Rights Reserved.
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
  zIndex: 1000
};

const navLinks = {
  display: "flex",
  gap: "28px",
  fontSize: "15px",
  fontWeight: "600"
};

const link = {
  color: "white",
  textDecoration: "none"
};

const hero = {
  minHeight: "780px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: "90px 8%",
  background:
    "radial-gradient(circle at top, rgba(212,175,55,0.18), transparent 30%), linear-gradient(135deg, #050505, #241b10, #000)",
  color: "white"
};

const heroTitle = {
  fontSize: "68px",
  lineHeight: "1.08",
  margin: "18px 0"
};

const heroText = {
  fontSize: "24px",
  color: "#e8e0d2",
  lineHeight: "1.7",
  marginBottom: "38px",
  maxWidth: "900px",
  marginLeft: "auto",
  marginRight: "auto"
};

const button = {
  display: "inline-block",
  background: "#d4af37",
  color: "#111",
  padding: "18px 36px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "17px"
};

const section = {
  padding: "90px 8%",
  maxWidth: "1250px",
  margin: "0 auto"
};

const goldSmall = {
  color: "#b68b1d",
  fontWeight: "bold",
  letterSpacing: "2px",
  fontSize: "14px"
};

const heading = {
  fontSize: "48px",
  margin: "14px 0 20px"
};

const paragraph = {
  fontSize: "19px",
  lineHeight: "1.9",
  color: "#444",
  maxWidth: "900px"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
  gap: "28px",
  marginTop: "40px"
};

const card = {
  background: "white",
  padding: "26px",
  borderRadius: "24px",
  boxShadow: "0 14px 35px rgba(0,0,0,0.08)",
  border: "1px solid #eee"
};

const imageBox = {
  height: "170px",
  borderRadius: "18px",
  background:
    "linear-gradient(135deg, #f1ede4, #d8caa8)",
  marginBottom: "22px"
};

const darkSection = {
  padding: "90px 8%",
  background: "#0d0d0d",
  color: "white",
  textAlign: "center"
};

const contactBox = {
  marginTop: "35px",
  padding: "35px",
  background: "white",
  borderRadius: "24px",
  boxShadow: "0 14px 35px rgba(0,0,0,0.08)"
};

const goldLink = {
  color: "#b68b1d",
  textDecoration: "none",
  fontWeight: "bold"
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
  zIndex: 999
};

const footer = {
  background: "#050505",
  color: "#aaa",
  textAlign: "center",
  padding: "30px"
};
