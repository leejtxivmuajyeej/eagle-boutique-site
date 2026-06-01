export default function Home() {
  const products = [
    {
      name: "Ginger Shampoo",
      price: "$25",
      image:
        "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Wolffia Protein",
      price: "$35",
      image:
        "https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Herbal Toothpaste",
      price: "$35",
      image:
        "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #f6f7fb 0%, #dfe9f3 50%, #ffffff 100%)",
        fontFamily: "Arial, sans-serif",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "54px",
            color: "#b8860b",
            marginBottom: "10px",
            letterSpacing: "3px",
          }}
        >
          XENGORA
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#555",
            fontSize: "18px",
            marginBottom: "50px",
          }}
        >
          Luxury wellness products made simple.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(12px)",
                borderRadius: "28px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                transition: "0.3s",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "25px" }}>
                <h2
                  style={{
                    fontSize: "28px",
                    marginBottom: "10px",
                    color: "#222",
                  }}
                >
                  {product.name}
                </h2>

                <div
                  style={{
                    fontSize: "30px",
                    color: "#b8860b",
                    fontWeight: "bold",
                    marginBottom: "20px",
                  }}
                >
                  {product.price}
                </div>

                <button
                  style={{
                    width: "100%",
                    padding: "14px",
                    border: "none",
                    borderRadius: "16px",
                    background:
                      "linear-gradient(135deg, #d4af37, #f5d76e)",
                    color: "#222",
                    fontSize: "17px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "60px",
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(12px)",
            borderRadius: "28px",
            padding: "40px",
            textAlign: "center",
            boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
          }}
        >
          <h2
            style={{
              color: "#b8860b",
              marginBottom: "20px",
              fontSize: "36px",
            }}
          >
            Payment Options
          </h2>

          <p style={{ fontSize: "18px", marginBottom: "10px" }}>
            PayPal: @xengthao1999
          </p>

          <p style={{ fontSize: "18px", marginBottom: "10px" }}>
            Zelle: 478-697-2163
          </p>

          <p style={{ fontSize: "18px", marginBottom: "30px" }}>
            Venmo: @xengthao99
          </p>

          <a
            href="https://wa.me/14786972163"
            target="_blank"
            style={{
              display: "inline-block",
              padding: "16px 35px",
              borderRadius: "999px",
              background: "#25D366",
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
