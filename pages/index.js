export default function Home() {
  const products = [
    {
      name: "Premium Fresh Ginger",
      desc: "High-quality fresh ginger sourced for international markets."
    },
    {
      name: "Specialty Rice Products",
      desc: "Carefully selected rice products from trusted suppliers."
    },
    {
      name: "Wolffia Protein Supplements",
      desc: "Innovative wellness and nutrition products."
    }
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          background: "white",
          borderRadius: "24px",
          padding: "60px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <h1
          style={{
            fontSize: "56px",
            marginBottom: "20px",
            color: "#111",
          }}
        >
          Eagle International Import Export
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#555",
            marginBottom: "50px",
            lineHeight: "1.6",
          }}
        >
          Global Import & Export Solutions specializing in agricultural,
          wellness, beauty, and specialty products worldwide.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
            marginBottom: "60px",
          }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              style={{
                background: "#fafafa",
                borderRadius: "20px",
                padding: "30px",
                border: "1px solid #eee",
              }}
            >
              <div
                style={{
                  height: "220px",
                  background: "#e9e9e9",
                  borderRadius: "16px",
                  marginBottom: "20px",
                }}
              />

              <h2
                style={{
                  fontSize: "28px",
                  marginBottom: "12px",
                }}
              >
                {product.name}
              </h2>

              <p
                style={{
                  color: "#666",
                  lineHeight: "1.6",
                }}
              >
                {product.desc}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            background: "#111",
            color: "white",
            borderRadius: "24px",
            padding: "50px",
          }}
        >
          <h2
            style={{
              fontSize: "40px",
              marginBottom: "20px",
            }}
          >
            Contact Us
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
            }}
          >
            Eagle International Import Export LLC
            <br />
            Georgia, USA
            <br />
            International sourcing, importing, exporting, and logistics
            solutions.
          </p>
        </div>
      </div>
    </main>
  );
}
