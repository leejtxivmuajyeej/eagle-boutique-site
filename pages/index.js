export default function Home() {
  return (
    <main style={{
      fontFamily: "Arial",
      background: "#f8f5ef",
      minHeight: "100vh",
      padding: "60px"
    }}>

      <h1 style={{
        fontSize: "60px",
        marginBottom: "60px",
        fontWeight: "800"
      }}>
        Premium Wellness Collection
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "40px"
      }}>

        {/* Ginger Shampoo */}
        <div style={{
          background: "white",
          borderRadius: "28px",
          padding: "30px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
        }}>

          <img
            src="https://i.postimg.cc/GpMJcCwx/Shampoo.jpg"
            style={{
              width: "100%",
              height: "320px",
              objectFit: "contain",
              marginBottom: "25px"
            }}
          />

          <h2>Ginger Shampoo</h2>

          <p>
            Luxury botanical ginger shampoo designed for scalp care,
            healthy-looking hair, and wellness beauty routines.
          </p>
        </div>

        {/* Toothpaste */}
        <div style={{
          background: "white",
          borderRadius: "28px",
          padding: "30px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
        }}>

          <img
            src="https://i.postimg.cc/25TL4F0z/Herbal-Toothpaste.jpg"
            style={{
              width: "100%",
              height: "320px",
              objectFit: "contain",
              marginBottom: "25px"
            }}
          />

          <h2>Herbal Toothpaste</h2>

          <p>
            Premium herbal toothpaste inspired by natural wellness
            and daily oral care traditions.
          </p>
        </div>

        {/* Wolffia */}
        <div style={{
          background: "white",
          borderRadius: "28px",
          padding: "30px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
        }}>

          <img
            src="https://i.postimg.cc/TY8j20SL/wolffia.jpg"
            style={{
              width: "100%",
              height: "320px",
              objectFit: "contain",
              marginBottom: "25px"
            }}
          />

          <h2>Wolffia Protein</h2>

          <p>
            Plant-based superfood protein supplement crafted for
            wellness, nutrition, and healthy lifestyles.
          </p>
        </div>

      </div>
    </main>
  )
}
