import { useState } from "react";

export default function Home() {

  const [shampooQty, setShampooQty] = useState(0);
  const [toothpasteQty, setToothpasteQty] = useState(0);
  const [proteinQty, setProteinQty] = useState(0);

  const subtotal =
    shampooQty * 25 +
    toothpasteQty * 35 +
    proteinQty * 35;

  const totalQty =
    shampooQty +
    toothpasteQty +
    proteinQty;

  const shipping =
    totalQty > 0 && totalQty <= 2 ? 10 : 0;

  const total = subtotal + shipping;

  return (
    <div style={styles.body}>

      {/* HEADER */}
      <div style={styles.header}>
        <h1 style={styles.logo}>XENGORA</h1>

        <p style={styles.subtitle}>
          Luxury wellness products crafted for beauty, health, and lifestyle.
        </p>
      </div>

      {/* PRODUCTS */}
      <div style={styles.products}>

        {/* SHAMPOO */}
        <div style={styles.card}>

          <img
            src="./images/shampoo.jpg"
            alt="Ginger Shampoo"
            style={styles.image}
          />

          <h2>Ginger Shampoo</h2>

          <p style={styles.description}>
            Luxury botanical ginger shampoo designed for scalp care,
            healthy-looking hair, and wellness beauty routines.
          </p>

          <div style={styles.price}>$25</div>

          <input
            type="number"
            min="0"
            value={shampooQty}
            onChange={(e) =>
              setShampooQty(parseInt(e.target.value) || 0)
            }
            style={styles.input}
          />

        </div>

        {/* TOOTHPASTE */}
        <div style={styles.card}>

          <img
            src="./images/toothpaste.jpg"
            alt="Herbal Toothpaste"
            style={styles.image}
          />

          <h2>Herbal Toothpaste</h2>

          <p style={styles.description}>
            Premium herbal toothpaste inspired by natural wellness
            and daily oral care traditions.
          </p>

          <div style={styles.price}>$35</div>

          <input
            type="number"
            min="0"
            value={toothpasteQty}
            onChange={(e) =>
              setToothpasteQty(parseInt(e.target.value) || 0)
            }
            style={styles.input}
          />

        </div>

        {/* PROTEIN */}
        <div style={styles.card}>

          <img
            src="./images/protein.jpg"
            alt="Wolffia Protein"
            style={styles.image}
          />

          <h2>Wolffia Protein</h2>

          <p style={styles.description}>
            Plant-based superfood protein supplement crafted for wellness,
            nutrition, and healthy lifestyles.
          </p>

          <div style={styles.price}>$35</div>

          <input
            type="number"
            min="0"
            value={proteinQty}
            onChange={(e) =>
              setProteinQty(parseInt(e.target.value) || 0)
            }
            style={styles.input}
          />

        </div>

      </div>

      {/* ORDER SUMMARY */}
      <div style={styles.summary}>

        <h1>Order Summary</h1>

        <h3 style={styles.summaryText}>
          Subtotal: ${subtotal}
        </h3>

        <h3 style={styles.summaryText}>
          Shipping: {shipping === 0 ? "Free" : `$${shipping}`}
        </h3>

        <h2 style={styles.total}>
          Total: ${total}
        </h2>

        <a
          href={`https://wa.me/14786972163?text=Hello, I would like to order.`}
          target="_blank"
          style={styles.button}
        >
          Order on WhatsApp
        </a>

        <div style={styles.payment}>
          <p><strong>Zelle:</strong> 478-697-2163</p>
          <p><strong>Venmo:</strong> @xengthao99</p>
          <p><strong>PayPal:</strong> @xengthao1999</p>
        </div>

      </div>

    </div>
  );
}

const styles = {

  body: {
    background: "#f5f1eb",
    minHeight: "100vh",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
  },

  header: {
    textAlign: "center",
    marginBottom: "40px",
  },

  logo: {
    fontSize: "70px",
    fontWeight: "bold",
    marginBottom: "15px",
  },

  subtitle: {
    color: "#666",
    fontSize: "20px",
  },

  products: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
    gap: "25px",
    width: "100%",
    maxWidth: "1400px",
    margin: "auto",
  },

  card: {
    background: "white",
    borderRadius: "25px",
    padding: "30px",
    textAlign: "center",
    boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
  },

  image: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "20px",
  },

  description: {
    marginTop: "15px",
    lineHeight: "1.8",
    color: "#555",
    fontSize: "16px",
  },

  price: {
    fontSize: "55px",
    color: "#c18a00",
    marginTop: "25px",
    fontWeight: "bold",
  },

  input: {
    width: "90px",
    height: "55px",
    marginTop: "25px",
    textAlign: "center",
    fontSize: "22px",
    borderRadius: "15px",
    border: "2px solid #ddd",
  },

  summary: {
    background: "white",
    maxWidth: "760px",
    margin: "80px auto",
    padding: "60px 40px",
    borderRadius: "30px",
    textAlign: "center",
    boxShadow: "0 5px 25px rgba(0,0,0,0.08)",
  },

  summaryText: {
    fontSize: "28px",
    marginTop: "15px",
  },

  total: {
    color: "#c18a00",
    fontSize: "52px",
    marginTop: "25px",
    fontWeight: "bold",
  },

  button: {
    display: "inline-block",
    marginTop: "35px",
    background: "#25D366",
    color: "white",
    padding: "18px 40px",
    borderRadius: "50px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "22px",
  },

  payment: {
    marginTop: "35px",
    lineHeight: "2",
    fontSize: "22px",
  },

};
