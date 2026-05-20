export default function Home() {
  const products = [
    "Premium Fresh Ginger",
    "Specialty Rice Products",
    "Wolffia Protein Supplements",
    "Beauty & Wellness Products",
    "Global Sourcing",
    "Import & Export Logistics"
  ];

  return (
    <main style={{
      fontFamily: "Arial, sans-serif",
      background: "#f7f4ef",
      color: "#111",
      minHeight: "100vh"
    }}>
      <section style={{
        padding: "70px 40px",
        background: "linear-gradient(135deg, #111 0%, #2b2118 100%)",
        color: "white",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "52px", marginBottom: "16px" }}>
          Eagle International Import & Export LLC
        </h1>
        <p style={{ fontSize: "22px", maxWidth: "850px", margin: "0 auto 30px" }}>
          Connecting premium agricultural, wellness, beauty, and specialty products to global markets.
        </p>
        <a href="#contact" style={{
          background: "#c9a227",
          color: "#111",
          padding: "14px 26px",
          borderRadius: "30px",
          textDecoration: "none",
          fontWeight: "bold"
        }}>
          Contact Us
        </a>
      </section>

      <section style={{ padding: "55px 40px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "16px" }}>About Our Company</h2>
        <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#444" }}>
          Eagle International Import & Export LLC is a USA-based company focused on sourcing,
          importing, exporting, and distributing quality products across international markets.
          We work with agricultural goods, wellness products, beauty items, and specialty consumer products.
        </p>
      </section>

      <section style={{ padding: "40px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "25px" }}>Products & Services</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "22px"
        }}>
          {products.map((item) => (
            <div key={item} style={{
              background: "white",
              padding: "28px",
              borderRadius: "18px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              border: "1px solid #eee"
            }}>
              <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>{item}</h3>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Professional sourcing, supply, and trade support for domestic and international buyers.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section style={{
        padding: "55px 40px",
        maxWidth: "1100px",
        margin: "0 auto"
      }}>
        <h2 style={{ fontSize: "36px", marginBottom: "16px" }}>Why Work With Us</h2>
        <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#444" }}>
          We help connect suppliers, buyers, and logistics partners with a focus on trust,
          product quality, professional communication, and long-term business relationships.
        </p>
      </section>

      <section id="contact" style={{
        padding: "60px 40px",
        background: "#111",
        color: "white",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "36px", marginBottom: "15px" }}>Contact Us</h2>
        <p style={{ fontSize: "18px", marginBottom: "8px" }}>
          Eagle International Import & Export LLC
        </p>
        <p style={{ fontSize: "18px", color: "#d8c27a" }}>
          Georgia, USA
        </p>
        <p style={{ fontSize: "18px" }}>
          Email: your-email@example.com
        </p>
      </section>
    </main>
  );
}
